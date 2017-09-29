import express from "express";
import path from "path";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import exphbs from "express-handlebars";
import expstate from "express-state";

// React Components
import React from "react";
import RDS from "react-dom/server";
import HomePage from "./public/javascripts/pages/home";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//express state setup
expstate.extend(app);
app.set("state namespace", "App");

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    const initialState = {
        count: 10,
        isLoaded: false
    };

    const appString = RDS.renderToString(<HomePage {...initialState} />);

    //express-state
    res.expose(initialState, "App.initialState");

    res.render("home", {
        title: "Server Rendered React",
        appString: appString,
        initialState: initialState
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}


module.exports = app;
