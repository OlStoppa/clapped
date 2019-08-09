import React from 'react';
import SideNav from './SideNav';
import AddModal from './AddModal';
import EditModal from './EditModal';
import EditList from './EditList';

class Custom extends React.Component {
    constructor(props){
        super(props);

        this.openAddList = this.openAddList.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleAddList = this.handleAddList.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.toggleEditPage = this.toggleEditPage.bind(this);
        this.renderCustomEditor = this.renderCustomEditor.bind(this);
        this.handleDeleteList = this.handleDeleteList.bind(this);
        this.setData = this.setData.bind(this);
        
        this.state = {
            isOpen: false,
            editOpen: false,
            value: '',
            data: [],
            activeKey: '',
            activeIndex: undefined,
            editList: false
           

        }
    }

    openAddList() {
        this.setState({ isOpen: true });
    }

    openEditModal(key, index) {
        this.setState({ 
            editOpen: true,
            activeKey: key,
            activeIndex: index
        });
    }
    toggleEditPage() {
        this.setState((prevState) => ({ editList: !prevState.editList}));

    }
    setData(data) {
        this.setState({data});
    }
  
    closeModal() {
        this.setState({ isOpen: false });
        this.setState({ editOpen: false});
    }
    handleAddList(e) {
        e.preventDefault();
        const newList = {
            name: this.state.value,
            items: []
        }
        if(this.state.data !== null) {
            this.setState(prevState => ({
                data: [...prevState.data, newList]
            }));
        } else {
            this.setState({data: [newList]});
        }
        const data = JSON.parse(localStorage.getItem('data'));
        data.push(newList);
        localStorage.setItem('data', JSON.stringify(data));
        this.closeModal();
    }
    handleNameChange(e) {
        this.setState({value: e.target.value })
    }
    handleDeleteList() {
        const data = this.state.data;
        const remove = this.state.activeKey;
        const filteredData = data.filter(item => item.name !== remove);
        this.setState({data: filteredData});
        this.closeModal();
    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'));
        this.setState({ data });
    }
    componentWillUnmount() {
        localStorage.setItem('data', JSON.stringify(this.state.data));
    }

    renderCustomEditor() {
        if(!this.state.editList) {
            return (
                <div className="main">
                    <AddModal 
                        isOpen={this.state.isOpen}
                        closeModal={this.closeModal}
                        handleAddList={this.handleAddList}
                        handleNameChange={this.handleNameChange}
                        />
    
                    <EditModal 
                        isOpen={this.state.editOpen}
                        closeModal={this.closeModal}
                        title={this.state.activeKey}
                        edit={this.toggleEditPage}
                        remove={this.handleDeleteList}
                        />
                    
                    <SideNav />
                    <div className="startBox__container" >
                        <div className="startButton" onClick={this.openAddList}>
                        +<span>Add new</span>
                        </div>
                        {this.state.data && this.state.data.map((key, index) => (
                            <div key={key.name} 
                            className="startButton" 
                            onClick={()=>{this.openEditModal(key.name,index)}}>
                            {key.name}
                            </div>
                        ))}
                    </div>
    
                </div>
            );
        } else {
            return (
                <EditList
                    title={this.state.activeKey} 
                    data={this.state.data[this.state.activeIndex].items}
                    index={this.state.activeIndex}
                    toggle={this.closeModal}
                    back={this.toggleEditPage}
                    set={this.setData}
                />
            );
        }
    }

    render() {    
           return <div>{this.renderCustomEditor()}</div>;
              
    }
}

export default Custom;