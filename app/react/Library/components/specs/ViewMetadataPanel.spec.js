//import React from 'react';
//import {shallow} from 'enzyme';
//import configureMockStore from 'redux-mock-store';
//import Immutable from 'immutable';
//import documents from 'app/Documents';

//import DocumentForm from '../../containers/DocumentForm';
//import PanelContainer, {ViewMetadataPanel} from 'app/Viewer/components/ViewMetadataPanel';
//import SidePanel from 'app/Layout/SidePanel';

//describe('ViewMetadataPanel', () => {
  //let component;
  //let props;

  //beforeEach(() => {
    //props = {
      //doc: {metadata: []}
    //};
  //});

  //let render = () => {
    //component = shallow(<ViewMetadataPanel {...props}/>);
  //};

  //it('should render a SidePanel', () => {
    //render();

    //expect(component.find(SidePanel).length).toBe(1);
    //expect(component.find(SidePanel).props().open).toBeUndefined();
  //});

  //describe('when props.open', () => {
    //it('should open SidePanel', () => {
      //props.open = true;
      //render();

      //expect(component.find(SidePanel).props().open).toBe(true);
    //});
  //});

  //describe('onSubmit', () => {
    //it('should saveDocument', () => {
      //props.saveDocument = jasmine.createSpy('saveDocument');
      //props.docBeingEdited = true;
      //render();

      //let doc = 'doc';
      //component.find(DocumentForm).simulate('submit', doc);

      //expect(props.saveDocument).toHaveBeenCalledWith(doc);
    //});
  //});

  //describe('PanelContainer', () => {
    //let state = {
      //documentViewer: {
        //uiState: Immutable.fromJS({
          //panel: ''
        //}),
        //doc: Immutable.fromJS({}),
        //references: Immutable.fromJS(['reference']),
        //templates: Immutable.fromJS(['template']),
        //thesauris: Immutable.fromJS(['thesauris']),
        //docForm: {}
      //}
    //};

    //const mockStore = configureMockStore([]);

    //let renderContainer = () => {
      //spyOn(documents.helpers, 'prepareMetadata');
      //let store = mockStore(state);
      //component = shallow(<PanelContainer />, {context: {store}});
    //};

    //it('should prepare doc with template and thesauris', () => {
      //renderContainer();
      //expect(documents.helpers.prepareMetadata).toHaveBeenCalledWith(
        //state.documentViewer.doc.toJS(),
        //state.documentViewer.templates.toJS(),
        //state.documentViewer.thesauris.toJS()
      //);
    //});

    //it('should be closed when panel is not viewMetadataPanel', () => {
      //renderContainer();
      //expect(component.props().open).toBe(false);
    //});

    //it('should be open when panel is ViewMetadataPanel', () => {
      //state.documentViewer.uiState = state.documentViewer.uiState.set('panel', 'viewMetadataPanel');
      //renderContainer();
      //expect(component.props().open).toBe(true);
    //});
  //});
//});
