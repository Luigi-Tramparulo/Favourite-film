import React from 'react'
import {storiesOf} from "@storybook/react";
import FavouriteFilms from "../components/favouriteFilm";
import 'bootstrap/dist/css/bootstrap.min.css';
 
storiesOf("FavouriteFilms", module).add("default", () =>( <FavouriteFilms /> ));