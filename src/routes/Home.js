import React from 'react';
import { Row, Col, Card } from 'antd';
import createG2 from 'g2-react';
import { Stat } from 'g2';



const Pie = createG2(chart => {
      // 以 year 为维度划分分面
      chart.facet(['year'], {
        margin: 50,
        facetTitle: {
          colDimTitle: {
            title: null
          },
          colTitle: { 
            title: {
              fontSize: 18,
              textAlign: 'center',
              fill: '#999'
            }
          }
        }
      }); 
      chart.legend({
        position: 'bottom'
      });
      chart.coord('theta', {
        radius: 1,
        inner: 0.35
      });
      chart.tooltip({
        title: null
      });
      chart.intervalStack().position(Stat.summary.percent('profit'))
        .color('area')
        .label('..percent', {
          offset: -2
        })
        .style({
          lineWidth: 1
        });
      chart.render();      
    });


class ChartPie extends React.Component {
	state={
		 data: [
		   {year:2007, area:'亚太地区', profit: 7860*0.189},
		   {year:2007, area:'非洲及中东', profit: 7860*0.042},
		   {year:2007, area:'拉丁美洲', profit: 7860*0.025},
		   {year:2007, area:'中欧和东欧', profit: 7860*0.018},
		   {year:2007, area:'西欧', profit: 7860*0.462},
		   {year:2007, area:'北美', profit: 7860*0.265},
		 
		 ],
		 forceFit: true,
		 width: 500,
		 height: 450,
		 plotCfg: {
		   margin: 80
		 },
	}
	render() {
	  return (
	  	      <Pie
	  	        data={this.state.data}
	  	        width={this.state.width}
	  	        height={this.state.height}
	  	        plotCfg={this.state.plotCfg}
	  	        forceFit={this.state.forceFit} />
	  );
	}
}





 const Line = createG2(chart => {
      chart.col('month', {
        alias: '月份',
        range: [0, 1]
      });
      chart.col('temperature', {
        alias: '平均温度(°C)'
      });
      chart.line().position('month*temperature').size(2);
      chart.render();
    });

class ChartLine extends React.Component {
	state={
		 data: [
            {month: 'Jan', temperature: 7.0},
            {month: 'Feb', temperature: 6.9},
            {month: 'Mar', temperature: 9.5},
            {month: 'Apr', temperature: 14.5},
            {month: 'May', temperature: 18.2},
            {month: 'Jun', temperature: 21.5},
            {month: 'Jul', temperature: 25.2},
            {month: 'Aug', temperature: 26.5},
            {month: 'Sep', temperature: 23.3},
            {month: 'Oct', temperature: 18.3},
            {month: 'Nov', temperature: 13.9},
            {month: 'Dec', temperature: 9.6}
          ],
          forceFit: true,
          width: 500,
          height: 450
	}
	render() {
	  return (
	    <div>
	      <Line
	        data={this.state.data}
	        width={this.state.width}
	        height={this.state.height}
	        forceFit={this.state.forceFit} />
	</div>
	  );
	}
}
    




export default class extends React.Component {
  state = {}

  render() {
    return (
    	<div>

				<Card title="待处理事项" bordered={false} noHovering={true} style={{marginBottom:"10px"}}>
	    		<Row gutter={24} >
	    		  <Col span={4} >
	    		  	<Card style={{textAlign:"center"}} bordered={false}>
	    		  	   <h1 style={{fontSize:"25px"}}>12</h1>
	    		  	   <p>1200.00</p>
	    		  	   <p>提现申请</p>
	    		  	 </Card>
	    		  </Col>
	    		  <Col span={4} >
	    		  	<Card style={{textAlign:"center"}} bordered={false}>
	    		  	   <h1 style={{fontSize:"25px"}}>0</h1>
	    		  	   <p>0.00</p>
	    		  	   <p>提现复核</p>
	    		  	 </Card>
	    		  </Col>
	    		  <Col span={4} >
	    		  	<Card style={{textAlign:"center"}} bordered={false}>
	    		  	   <h1 style={{fontSize:"25px"}}>2</h1>
	    		  	   <p>200.00</p>
	    		  	   <p>人工充值</p>
	    		  	 </Card>
	    		  </Col>
	    		  <Col span={4} >
	    		  	<Card style={{textAlign:"center"}} bordered={false}>
	    		  	   <h1 style={{fontSize:"25px"}}>3</h1>
	    		  	   <p>1200.00</p>
	    		  	   <p>白条用户</p>
	    		  	 </Card>
	    		  </Col>
	    		  <Col span={4} >
	    		  	<Card style={{textAlign:"center"}} bordered={false}>
	    		  	   <h1 style={{fontSize:"25px"}}>12</h1>
	    		  	   <p>1200.00</p>
	    		  	   <p>白条应收</p>
	    		  	 </Card>
	    		  </Col>
		  		</Row>
				</Card>    
				   
				
		      <Row gutter={16}>

		        <Col span={12} >
							<Card title="订单趋势" bordered={false} noHovering={true} >
				        <ChartLine />
			        </Card>
		        </Col>

		        <Col span={12} >
			        <Card title="用户组比例" bordered={false} noHovering={true} >
			           <ChartPie />
			        </Card>
		        </Col>



		      </Row>
	    	


    	</div>

    );
  }
}

