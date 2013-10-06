var BarChart = function(ops){
  this.$el = ops.el;

  this.render();
};

BarChart.prototype = {

  races: [
    {
      id: 'white',
      label: 'White'
    },{
      id: 'black',
      label: 'Black'
    },{
      id: 'natives',
      label: 'Native American'
    },{
      id: 'asian',
      label: 'Asian'
    },{
      id: 'hispanic',
      label: 'Hispanic'
    }
  ],

  render: function(){
    this.$list = this.$el.find('ul');

    _.forEach(this.races,function(race){
      this.$list.append([
        '<li class="',race.id,'">',
          '<div class="bar-outer">',
            '<div class="bar-inner"></div>',
          '</div>',
          '<p><span class="percent"></span>',race.label,'</p>',
        '</li>'
      ].join(""));
    },this);

    this.$percents = this.$el.find('.percent');
    this.$bars = this.$el.find('.bar-inner');

    this.height = this.$el.innerHeight();
  },

  setData: function(data){
    _.forEach(this.races,function(race,i){
      var pct = data[race.id] || 0;
      pct = Math.round(pct * 100);

      $(this.$percents[i]).text(pct + '%');
      $(this.$bars[i]).css({
        width: pct + '%'
      });
    },this);
  },

  updateSize: function(w,h){
    this.availableHeight = h;
    this.centerVertically();
  },

  centerVertically: function(){
    var margin = (this.availableHeight - this.height) / 2;

    this.$el.css({
      'margin-top': + margin
    });
  }

}