import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Services } from "../http-services";
import { instancePosts } from "../http-services/instancePosts";


export const Posts = props => {
    const allPosts = props;
    
    
  
    return (

        
      <div className="container">
          <h1>Liste des Posts </h1>
          {JSON.stringify(allPosts)}
        <div className="input-group my-3">
          <input type="text" className="form-control" placeholder="Ajouter un post" />
          <button
            className="btn btn-outline-secondary"
            type="button" onClick={addPost}>Ajouter</button>
        </div>
  
        <form className="mb-3">
          <ul className="list-group">
            dfgdgdfg
          </ul>
        </form>
        
        <Link className="btn btn-primary" to="/">
          Retour vers la home
        </Link>
      </div>
    );





    function addPost() {
        const newPost = {
            content: 'sdfsdfs'
        };
        Services.addPosts()
    }

      
  };
  