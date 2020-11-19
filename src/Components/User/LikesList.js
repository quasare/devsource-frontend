import React from 'react';
import {Link} from 'react-router-dom';
import { 
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
  } from '@bootstrap-styled/v4';

export default function LikesList({likes}) {
    console.log(likes);
    let list = likes.map((l) => 
        <td> {l.resource_name}
        <Link path to={`/`}>test</Link>
        </td>)
    return (
        <Table>
            <thead>
               test
            </thead>
            <tbody>
            
                {list}
            </tbody>
        </Table>
       
    )
}
