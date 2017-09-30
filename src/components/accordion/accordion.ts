import { Component,Input } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

/**
 * 3 level accordion component. To be used as dropdown menu.
 * TODO: make into multi-level system.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {

  @Input() public notify: Function

  information: any[]
  currentSelection: any

  constructor(private http: Http) {
    let local = this.http.get('assets/json/information.json').map(res => res.json().items)
      local.subscribe(data => {
        this.information = data
        this.information.forEach(branch => {
          branch.parent = 0
          this.makeTreeTraversable(branch)
        })
      })
  }

  /**
   * traverse the tree and add a 'parent' property and assign the previous node
   * as its parent. We will use this later on to traverse the tree.
   */
  private makeTreeTraversable(data) {
    if (typeof data !== 'undefined')  {
      if (typeof data.children !== 'undefined' &&
          data.children.length)
      {
        data.children.forEach((item) => {
          item.parent = data;
          this.makeTreeTraversable(item)
        });
      }
    }
  }

  /**
   * Traverse the tree starting from current node up to the root.
   * set 'open' each node as we go.
   */
  private setPreviousSection(node, open) {
    node.open = open;
    // this is giving me a fucking headache. root is set to 0 and yet
    // this validates as false and proceeds to the next node.
    // Interim. Call again and set open to 'true' to show new node.
    if (node.parent === 0)
      return
    this.setPreviousSection(node.parent, open)
  }

  /**
   * check if new node is on the same branch as the previous open node.
   */
  private isInSameBranch(current): boolean {
    // when previous parent is same as currents
    if (this.currentSelection.parent === current.parent)
      return false;
    // or, current is in same branch
    if (current.parent.open && current.open)
      return true;

    return false;
  }

  /**
   * open currently selected branch while closing the previous open node.
   */
  private togglePreviousSection(current) {
    if (typeof this.currentSelection === 'undefined') {
      this.currentSelection = current
      return
    }

    if (!this.isInSameBranch(current)) {
      this.setPreviousSection(this.currentSelection, false)
    }

    this.currentSelection = current;
    // This is to circumvent some weird beahviour in setPreviousSection.
    // traverse this branch and set to open all the way to root.
    this.setPreviousSection(current, true)
  }

  /**
   * toggle open/close root node's 1st gen. children
   */
  toggleSection(i) {
    this.information[i].open = !this.information[i].open
    if (this.currentSelection !== this.information[i])
      this.togglePreviousSection(this.information[i])
  }

  /**
   * toggle open/close child node's 1st gen. children
   */
  toggleItem(i, j) {
    this.information[i].children[j].open= !this.information[i].children[j].open
    if (this.currentSelection !== this.information[i].children[j])
      this.togglePreviousSection(this.information[i].children[j])
  }

  /**
   * selected leaf node event handler
   */
  handleEvent(node) {
    this.notify(node)
  }
}
