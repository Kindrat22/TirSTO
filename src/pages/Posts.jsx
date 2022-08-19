import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import WorkTable from "../components/UI/Table/workTable";
import './style_pages.css'





function Posts() {
    return (

        <Accordion  className={'Pages_total'}   defaultActiveKey={['0']} alwaysOpen >
            <h4  className="text-center m-4 ">Ми виконуємо ремонт</h4>
            <Accordion.Item   eventKey="1">
                <Accordion.Header  >Мотору</Accordion.Header>
                <Accordion.Body >
                    <WorkTable
                        rows ={[
                            {name: 'Ремонт Мотору',price: 123},
                            {name: 'Ремонт Мотору',price: 237},
                            {name: 'Ремонт Мотору',price: 262},
                            {name: 'Ремонт Мотору',price: 305},
                            {name: 'Ремонт Мотору',price: 356},
                            {name: 'Ремонт Мотору',price: 100},
                        ]}
                    />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">

                <Accordion.Header>Ходової</Accordion.Header>
                <Accordion.Body>
                    <WorkTable
                        rows ={[
                            {name: 'Ремонт Ходової',price: 123},
                            {name: 'Ремонт Ходової',price: 237},
                            {name: 'Ремонт Ходової',price: 262},
                            {name: 'Ремонт Ходової',price: 305},
                            {name: 'Ремонт Ходової',price: 356},
                            {name: 'Ремонт Ходової',price: 100},
                        ]}
                    />
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Напівпричіпів</Accordion.Header>
                <Accordion.Body>
                    <WorkTable
                        rows ={[
                            {name: 'Ремонт Напівпричіпів',price: 123},
                            {name: 'Ремонт Напівпричіпів',price: 237},
                            {name: 'Ремонт Напівпричіпів',price: 262},
                            {name: 'Ремонт Напівпричіпів',price: 305},
                            {name: 'Ремонт Напівпричіпів',price: 356},
                            {name: 'Ремонт Напівпричіпів',price: 100},
                        ]}
                    />

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Posts;