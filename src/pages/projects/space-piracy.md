---
layout: ../../layouts/ProjectLayout.astro

title: Space Piracy
githubURL: https://github.com/AlexDuchnowski/SpacePiracy
tags: ["Interactive", "Puzzle", "Python"]
description: A black-box, number-guessing puzzle
---

I created the Space Piracy puzzle for the [2023 Brown Puzzle Hunt](https://2023.brownpuzzlehunt.com). The puzzle was designed for the final round of the hunt, so it is meant to take more than a few minutes to solve (and it could in fact take significantly longer). As with all puzzles in a puzzle hunt, the "solution" to the puzzle is a word or phrase.

The puzzle is included below:

<style>
    .piracy {
        font-family: "Consolas";
    }

    input {
        text-transform: uppercase;
        font-size: large;
        border: 2px solid black;
    }
</style>

<div class="piracy">
    <br />
    <header>
        <h4>
            <i
                >To hack the space station, you'll need more fingers than the
                average astronaut and familiarity with the crew's favorite
                functions.</i
            >
        </h4>
    </header>
    <br />
    <center>
        <input
            type="text"
            id="guess"
            placeholder="ENTER NUMBER HERE"
            size="20"
        />
        <br />
        <br />
        <div id="response-container"></div>
    </center>
    <br />
</div>

<script src="/src/scripts/piracy.js"></script>

## Hint

Hover over the text below to reveal a hint:

<span class="spoiler">The title of the puzzle was inspired by the fact that in <i>The Martian</i>, Mark Watney uses <b>hexadecimal</b> to communicate with NASA.</span>

## Solution

You can view a step-by-step solution of the puzzle at [this page](https://2023.brownpuzzlehunt.com/solution/space-piracy) from the 2023 Brown Puzzle Hunt.
