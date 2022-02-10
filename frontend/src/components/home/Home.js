import React, { useEffect, useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useFetchAPI, useGlobalState } from '../../hooks';
import RegModal from './RegModal';
import moogee from "../../media/moogee-logo-moge.svg";
import todoCliff from "../../media/todoCliff.svg";
import checked from "../../media/checked.svg";
import unchecked from "../../media/unchecked.svg";
import list from "../../media/listCheck.svg";
import { FaLongArrowAltRight, FaPencilAlt, FaPaperPlane, FaRegTrashAlt, FaFacebook, FaTwitterSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const Home = ({ setUser }) => {
    const [show, setShow] = useState(false);
    const [, dispatch] = useGlobalState();
    const url = process.env.REACT_APP_BASE_URL;

    const user = useFetchAPI('users/user/', {});
    console.log(user.resp);

    useEffect(() => {
        dispatch.fetchUser(user.resp);
        setUser(user.resp);
        dispatch.setCurrentPage("home");
        if (user.resp.username === "") {
            setShow(true);
        };
    }, [user]);

    return (
        <div className='container'>

            <main>
                <section className='row-board'>
                    <aside className="aside">
                        <div className="aside-cliff"><img src={todoCliff} width="100" alt="todo cliff board" /></div>
                        <div className="aside-moogee"><img src={moogee} width="100" alt="The moogee with m" /></div>
                    </aside>
                    <nav className="categories">
                        <div className="todos">
                            <p className='category-header'>Todo</p>
                            <ul >
                                <li className="todo__category">
                                    <img src={list} className="list-check" />
                                    <a href="#">Edication</a>
                                </li>
                                <li className="todo__category">
                                    <img src={list} className="list-check" />
                                    <a href="#">Music</a>
                                </li>
                                <li className="todo__category">
                                    <a href="#">More...</a>
                                </li>
                            </ul>
                        </div>
                        <div className="gratitudes">
                            <p className='category-header'>Gatitude</p>
                            <ul>
                                <li className="gatitude__category">
                                    <img src={list} className="list-check" />
                                    <a href="#">Edication</a>
                                </li>
                                <li className="gatitude__category">
                                    <img src={list} className="list-check" />
                                    <a href="#">Coding</a>
                                </li>
                                <li className="gatitude__category">
                                    <a href="#">More...</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
                <section className='section-gratitude'>
                    <div className="add-section">
                        <form>
                            <input type="checkbox" name="" id="" />
                            <input
                                type="text"
                                name=""
                                placeholder='   Please enter a Gratitude' id="" />
                            <button type='button'>
                                <FaPaperPlane size={20} />
                            </button>
                        </form>
                    </div>
                    <h3>Gratitude</h3>
                    <div className="todos-gratitudes">
                        <span className="check-image">
                            <img src={checked} alt="The checkbox of the gratitude" />
                        </span>
                        <span className="actual-text">Lorem ipsum dolor, sit amet....</span>
                        <div className="option-icons">
                            <span className="edit"><FaPencilAlt /></span>
                            <span className="delete"><FaRegTrashAlt /></span>
                            <span className="go-to"><FaLongArrowAltRight /></span>
                        </div>
                    </div>
                    <div className="todos-gratitudes">
                        <span className="check-image">
                            <img src={unchecked} alt="The checkbox of the gratitude" />
                        </span>
                        <span className="actual-text">Lorem ipsum dolor, sit amet....</span>
                        <div className="option-icons">
                            <span className="edit"><FaPencilAlt /></span>
                            <span className="delete"><FaRegTrashAlt /></span>
                            <span className="go-to"><FaLongArrowAltRight /></span>
                        </div>
                    </div>
                    <div className="todos-gratitudes">
                        <span className="check-image">
                            <img src={unchecked} alt="The checkbox of the gratitude" />
                        </span>
                        <span className="actual-text">Lorem ipsum dolor, sit amet....</span>
                        <div className="option-icons">
                            <span className="edit"><FaPencilAlt /></span>
                            <span className="delete"><FaRegTrashAlt /></span>
                            <span className="go-to"><FaLongArrowAltRight /></span>
                        </div>
                    </div>
                    <div className="todos-gratitudes">
                        <span className="check-image">
                            <img src={unchecked} alt="The checkbox of the gratitude" />
                        </span>
                        <span className="actual-text">Lorem ipsum dolor, sit amet....</span>
                        <div className="option-icons">
                            <span className="edit"><FaPencilAlt /></span>
                            <span className="delete"><FaRegTrashAlt /></span>
                            <span className="go-to"><FaLongArrowAltRight /></span>
                        </div>
                    </div>
                    <div className="todos-gratitudes">
                        <span className="check-image">
                            <img src={unchecked} alt="The checkbox of the gratitude" />
                        </span>
                        <span className="actual-text">Lorem ipsum dolor, sit amet....</span>
                        <div className="option-icons">
                            <span className="edit"><FaPencilAlt /></span>
                            <span className="delete"><FaRegTrashAlt /></span>
                            <span className="go-to"><FaLongArrowAltRight /></span>
                        </div>
                    </div>
                    <a className='more-link' href="#">more...</a>
                    <div className="social-icons">
                        <a href='#' className="icon facebook"><FaFacebook size={25} /></a>
                        <a href='#' className="icon twitter"><FaTwitterSquare size={25} /> </a>
                        <a href='#' className="icon instagram"><FaInstagramSquare size={25} /></a>
                        <a href='#' className="icon github"><FaGithubSquare size={25} /></a>
                    </div>
                </section>
            </main>
        </div >
    );
};

export default Home;
