# BattingData

## Overview
This Project began on expanding on my knowledge of understanding a Neural Network, and machine learning capabilities, using my love and passion for sports. The project revolves around creating a model to find the best way to construct a batting lineup, using historical data from the past 100 years.

## Finding the data
The project initially began when looking at a reddit post about how to most optimally construct a lineup. I wanted to dive deeper into this, I initally tried to find if anyone had gone through and alreayd lineup the data but only stumbled upon 5-6 years worth of data but not complete and cut off to just the top 20-30% of players from each season, so using the Retrosheet and Lahman Library.

## Cleaning the Data
Using the Lahmna library in R I was able to end of season statistics for players, and through R stripped any statistics not related to batting, and put all the statistics based on per plate apperance statistics, then used websites like Baseball Reference to confirm the accuracy of the data by webscraping and comparing. Using retrosheet's gamelogs I made a script in python that would count the number the number of games a specific player appeared in the lineupcard at each batting position. I also looked into potentially using SQL as a way to manage the data but ended up settling on using python to export the files to CSV. Then for accuracy sake I totaled the number and compared that to the number of games that player started. Once all the data was cleaned the data was saved in object files for quick access when sorting.  

## Sorting the Data
--Talk about putting a threshold on PA's limiting certain years, 
--Then go into inaccuracies in data, talk about hot streaks and cold streaks, then go into pitcher vs hitter matchups, then talk about surrounding players.

## Creating the model
--Talk about the implementation in the toy neural network, then comparing that with using Tensorflow.js

## current expansion
--Talk about creating a UI to allow users to input stats to build there lineup
--Talk about creating a Javascript or using Tableau to graphically place the data somwhere accesible and for people to see
--Coversion from Object files to CSV files
