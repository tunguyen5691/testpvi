import styled from 'styled-components'
import LoginFormPersonal from "../../components/LoginFormPersonal"
import LoginFormAgency from "../../components/LoginFormAgency"

const TabStyle = styled.div`
  width: 100%;
  .tabs {
    width: 100%;
    max-width: 400px;
    margin: auto;
    .tab-buttons {
      margin-bottom: 32px;
      padding: 0 16px;
      @media (max-width: 320px){
        padding: 0 8px;
      }
      button {
        background-color: transparent;
        border: none;
        width: 50%;
        text-align: center;
        color:  ${({ theme: { colors } }) => colors.placeholder};
        font-weight: bold;
        font-size: 20px;
        transition: all ease 0.3s;
        outline: none;
        font-family: 'Montserrat';
        @media (max-width: 360px) {
          font-size: 18px;
        }
        &:hover {
          outline: none;
        }
        &.active {
          color: white;
        }
      }
    }
  }
`

const LoginTabs = () => {

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
    <TabStyle>
      <div className="tabs">
        <Tabs>
          <Tab label="CÁ NHÂN">
            <div>
                <LoginFormPersonal />
            </div>
          </Tab>
          <Tab label="ĐẠI LÝ / CTV">
            <div>
                <LoginFormAgency />
            </div>
          </Tab>

        </Tabs>
      </div>
    </TabStyle>

  )
}

export default LoginTabs
