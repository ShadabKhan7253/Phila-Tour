import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(ele, offset = '60%') {
    this.itemsToReveal = ele;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWayPoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal');
  }

  createWayPoints() {
    let that = this;
    this.itemsToReveal.each(function () {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass('reveal__is-visible');
        },
        offset: that.offsetPercentage,
      });
    });
  }
}

export default RevealOnScroll;
