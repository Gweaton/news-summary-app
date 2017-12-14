# News Summary App

An single page app that gets the day's articles from the Guardian and summarises them using the Aylien text summary API.

The app displays a grid of the top 10 articles from the Guardian at any given time. It may take a couple of seconds before each article is displayed as the app waits to receive data from the Guardian and Aylien APIs (I'm planning to add a loading message to make this more obvious).

Hover over each headline/picture card to view a summary of that article's content.

A practice project to solidify what I've learnt in Angular 5 over the past few months with particular focus on:
  - RxJS Observables
  - A fully TDD'd Angular 5 application

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Concept

This project is based on an old Makers Academy weekend challenge, which uses the following user stories:
```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```
```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```
```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```
```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```
```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```
