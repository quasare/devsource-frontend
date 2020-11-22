import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ResourceForm from './ResourceForm';
import {sendResourceToAPI} from '../../Actions/resources'
import {Container} from '@bootstrap-styled/v4'
export default function NewResource() {

    const dispatch = useDispatch();
    const history = useHistory();


    function add({ lang, resource_name, website , detail }) {
        dispatch(sendResourceToAPI(lang, resource_name, website , detail));
        history.push("/languages");
      };

    function cancel() {
        history.push("/languages");
      };  

    return (
        <Container>
         <h1>New Resource</h1>
            <ResourceForm save={add} cancel={cancel} />
        </Container>
    )
}
