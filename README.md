<p align="center">
<h1 align="center">Muscle Deck</h1>
<p align="center">Browser-based game that uses a deck of cards to shuffle through a workout</p>
</p>

## Demo

![screenshot of application](/images/md-demo.png)

## About

A while back, I heard about the idea of a "Deck of Cards Workout", which is where you shuffle a deck of cards and do a specific exercise depending on the card suit, with the amount of exercise repetitions based on the card number. It's a fast-paced workout and a great way to improve cardiovascular health. This sounds fun, but you can't do the workout unless you have a physical deck of cards; this inspired me to create Muscle Deck.

Muscle Deck applies the concept of a card-based workout into a minimal and mobile-responsive web application.  Workouts can be done from anywhere without the need to carry around a physical deck of cards.  Currently, the game only supports four preselected exercise groups: push-ups, squats, pull-ups, and burpees.  Future updates will add the ability to create your own exercises, as well as the implementation of a scoreboard based on a timer.

Muscle Deck is built entirely with:

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

Make sure you have all the following prerequisites on your machine before using this application:

- NONE REQUIRED

### Installation

1. To get started, grab a copy of Muscle Deck by cloning it to your local machine:

```sh
git clone https://github.com/renderGUI/muscle-deck.git
```

## Usage

- **HOW TO PLAY** - Whereas a typical deck has 52 cards, Muscle Deck only has
  36 cards — there's no Aces, Kings, Queens, or Jacks. The deck of cards
  is shuffled at the beginning of every game. Each suit represents an
  exercise: spades for push-ups, hearts for squats, diamonds for
  pull-ups, and clubs for burpees. This adds up for a total of 52 reps
  for each exercise. All you have to do is go through the entire deck as
  fast as you can!

## Version History

- **1.2.1**: Fixed a bug where the initial progress would start at 1 instead of 0.

- **1.2.0**: Implementation of a dynamic progress bar that updates every time an exercise is completed.

- **1.0.0**: Initial release.
