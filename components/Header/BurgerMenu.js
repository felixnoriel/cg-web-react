import { Component } from 'react';
import './BurgerMenu.scss';

class BurgerMenu extends Component{

    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggleBurgerMenu(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        const { burgerMenu } = this.props;
        const { isOpen } = this.state;

        return (<div className="burger-menu-wrapper"> 
                    <button className="btn-burger-menu" onClick={ this.toggleBurgerMenu.bind(this) }>Burger Menu - click me </button>
                    <div className={`burger-menu-container ${isOpen && 'open'}`} >
                        <MenuList menuList={burgerMenu}/>
                    </div>
                </div>
        )
    }
}
const MenuList = ({menuList}) => {
    if (!menuList) {
        return '';
    }

    const menuListText = menuList.map( menuItem => {
        let menuChild = "";
        if(menuItem && menuItem.children){
            const child = menuItem.children.map( itemChild => {
                return ( <MenuItem key={itemChild.id} menuItem={itemChild} /> )
            })
            menuChild = (<ul className="menu-child"> {child} </ul>)
        }
        return (<MenuItem key={menuItem.id} menuItem={menuItem}> 
                    {menuChild} 
                </MenuItem> ); 
    });

    return ( <ul> {menuListText} </ul>)
}

const MenuItem = ({menuItem, children}) => {
    if(!menuItem){
        return '';
    }

    return (<li>
                <a href={menuItem.url}> {menuItem.title} </a>
                { children }
            </li>
    );
}

export default BurgerMenu;