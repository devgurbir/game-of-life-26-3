Run "git clone https://github.com/devgurbir/game-of-life"
Next, "npm install -g"
Use the command "gof" to start the Game Of Life.
You can provide arguments to customize GOF: size, count, interval. size refers to the size of the universe, count refers to the number of times the function will run
(you can refer to it as the number of generations too.) Providing interval will add a delay( in miliseconds ) before the next generation is printed.  
e.g gof --count 10 --size 8 --interval 100
Default size is 32, default count is infinity, default interval is 0
