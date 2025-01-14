import React, { useState } from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';


export default function OpenConversation() {

    const {sendMessage, selectedConversation} =  useConversations();

    const [text,setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        sendMessage(selectedConversation.recipients.map(r => r.id),text);
            setText("");
    }



    return (
        <div className="d-flex flex-column flex-grow-1">

        <div className="flex-grow-1 overflow-auto">

        </div>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="m-2">
                    <InputGroup>
                        <Form.Control 
                        as="textarea" 
                        required 
                        onChange={e => setText(e.target.value)}
                        value={text}
                        style={{height: "75px" , resize: "none"}}

                        />
                    <InputGroup.Append>
                        <Button type="submit">
                            Send
                        </Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Form.Group>

            </Form>
        </div>
    )
}
