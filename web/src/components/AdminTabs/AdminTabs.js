import styled from 'styled-components'
const AdminTabsStyle = styled.div`

`


const AdminTabs = ({tabText1, tabText2}) => {
  class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

      this.setState({ activeTab: tab });
    };
    render(){

      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}

          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content">{content}</div>

        </div>
      );
    }
  }

  const TabButtons = ({buttons, changeTab, activeTab}) =>{

    return(
      <div className="tab-buttons">
      {buttons.map(button =>{
        return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
      })}
      </div>
    )
  }

  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }
  return (
    <AdminTabsStyle>
      <div className="tabs adminTabs box-shadow2">
        <Tabs>
          <Tab label={`${tabText1}`}>
          </Tab>
          <Tab label={`${tabText2}`}>
          </Tab>
        </Tabs>
      </div>
    </AdminTabsStyle>
  )
}

export default AdminTabs
