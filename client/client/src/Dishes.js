import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

import './Dishes.css';

function Dishes() {

    const tip = useSelector(state => state.tip)
    const vid = useSelector(state => state.vid)

    const navigate = useNavigate();

    let key = 0

    let [perem, setPerem] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/rezept/').then(res => {
            //console.log(res.data);
            setPerem(res.data);

        });
    }, []);


    // console.log(tip[1])
    // console.log(vid[1])

    console.log(tip)
    console.log(vid)


    return (
        <>
            <div class="dishes">{`Список найденных в базе рецептов ${vid} ${tip}`}</div>

            <p class="panel_dishes"> {

                perem.map(country =>
                    <p>
                        {
                            (country.tip === tip && country.vid === vid) &&
                            <span>
                                {(key = 1) && <p> <Link to={`/rezept/${country.id}`}>{country.name}{'/'}{country.vid}{'/'}{country.tip}</Link></p>}
                            </span>

                        }
                    </p>

                )

            }



            </p >
            <p >{key === 0 && 
                <p class="panel_dishes"> {`К сожалению блюд - ${vid} ${tip} пока 
                не загружено попробуйте поискать что то другое  `} </p>
                
            }
           
            </p>

            <p >{key === 0 &&
                <p class="dishes">
                 <Button variant="primary" class="btn btn-primary btn-lg "
                     onClick={() => navigate("/")}> На главную страницу </Button>  

                </p>

            }
            </p>


        </>

    );
}

export default Dishes;