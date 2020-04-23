# CMPM163Labs #
## lab 2 ##
video: https://drive.google.com/file/d/1S7eR3p3pjnNppW0noad0Q4kCPNUwy5WR/view?usp=sharing

![](images/lab2_part2_screenshot.png)

## lab 3 ##
video: https://drive.google.com/file/d/1ek85-auk9Tzf8-pSZu05CoLLIh-uClGt/view?usp=sharing

cube on upper left: the green specular highlight is made with three.js phong material\
cube on upper right: the visible points are made with three.js points material\
cube on lower left: the two color interpolation is made with a custom shader\
cube on lower right: the four color interpolation is made with a custom shader

## lab 4 ##
Lab Questions:\
(images given in lab 4 description)\
a. What is the formula given a u value of the uv coordinate (a value between 0 and 1), I get the x value of the pixel to sample from in this 8x8 texture?\
x = 8u //scale u value 8 times to fit texture \
b. What is the formula given a v value of the uv coordinate (a value between 0 and 1), I get the y value of the pixel to sample from in this 8x8 texture?\
y = -8v+8 //scale v value 8 times and flip over vertical axis to fit texture \
c. What color is sampled from the texture at the uv coordinate (0.375, 0.25)? (sample from the image based on the number your formula gives you i.e. (1, 0) is blue)\
if (1,0) is blue then \
x = 8*(0.375) = 3 \
y = -8*(0.25)+8 = 6 \
(3, 6) which is white