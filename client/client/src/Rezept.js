import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

import './Rezept.css';

function Rezept() {

    const navigate = useNavigate();

    let [perem, setPerem] = useState([]);
    const params = useParams();
    const rezeptAPI = `http://127.0.0.1:8000/rezept/${params.id}`;

    useEffect(() => {
        axios.get(rezeptAPI).then(res => {
            //console.log(res.data);
            setPerem(res.data);

        });
    }, []);





    return (
        <>
            <p class="rezept"><Button variant="primary" class="btn btn-primary btn-lg"
                onClick={() => navigate("/")}> На главную страницу </Button>
            </p>
            <div class="panel_rezept">
                <h2>Рецепт блюда</h2>
                <h3>{perem.name}</h3>
                <h3>Ингридиенты</h3>
                <p>{perem.ingredients}</p>
                <h3>Рецепт</h3>
                <p>{perem.rezept}</p>
            </div>




        </>

    );
}

export default Rezept;