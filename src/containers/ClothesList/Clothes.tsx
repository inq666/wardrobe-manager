import React, { Component } from 'react';
import ClothesItem from '../../components/ClothesItem/ClothesItem';
import ClothesCreator from '../../components/ClothesCreator/ClothesCreator';
import { IClothes } from '../../interfaces';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './_clothes.scss';
import { fetchClothes, ActionsTypes, deleteClothes, addClothes, loadClothes } from '../../store/actions/clothesAction';
import { AppStateType } from '../../store/reducers/rootReducer';
import { ThunkDispatch } from 'redux-thunk';

type MapStateToPropsType = {
  clothesItems: IClothes[]
}

type MapDispatchToPropsType = {
  loadClothes(): void
  deleteClothes(id: string): void
  addClothes(): void
}

type ClothesPropsType = MapStateToPropsType & MapDispatchToPropsType

class ClothesList extends Component<ClothesPropsType, {}> {

  constructor(props: ClothesPropsType) {
    super(props)
    this.addClothesHandler = this.addClothesHandler.bind(this)
    this.deleteItemHandler = this.deleteItemHandler.bind(this)
    this.editItemHandler = this.editItemHandler.bind(this)
  }

  componentDidMount() {
    this.props.loadClothes()
  }

  addClothesHandler() {
    this.props.addClothes()
    /*    this.setState({
         clothesItems: [newItem, ...this.state.clothesItems]
       }) */
  }

  deleteItemHandler(id: string) {
    this.props.deleteClothes(id);
  }

  async editItemHandler(title: string, id: string) {
    /*    setClothesItems(prev => [...prev.filter(item => item.id !== id)])
       const response = await axios.patch(`clothes/${id}.json`, { clothesTitle: title })
       console.log(id) */
  }


  render() {
    return (
      <div className="wrapper">
        <div className="all-clothes">
          <ClothesCreator onAddClothes={this.addClothesHandler} />
          <div className="all-clothes__list">
            {
              this.props.clothesItems.map(item => {
                return (
                  <ClothesItem
                    id={item.id}
                    key={item.id}
                    clothesTitle={item.clothesTitle}
                    url={item.url}
                    onDelete={this.deleteItemHandler}
                    onEdit={this.editItemHandler}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    clothesItems: state.clothes.clothesItems
  }
}

function mapDispatchToProps(dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): MapDispatchToPropsType {
  return {
    loadClothes: bindActionCreators(loadClothes, dispatch),
    deleteClothes: bindActionCreators(deleteClothes, dispatch),
    addClothes: bindActionCreators(addClothes, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothesList);
