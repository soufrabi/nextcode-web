

const defaultCodePython = `""" Write your python code here """

print("Hello World from Python")
print("Subscribe to Premium for more features")
`

const defaultCodeCpp: string = `#include<iostream>

int main(int argc, char *argv[]){
    // Write your C++ code here ...
    std::cout << "Hello World from C++" << std::endl;
    std::cout << "Subscribe to Premium for more features " << std::endl;
    return 0;
}

`

const defaultCodeGo = `package main

import (
    "fmt"
)

func main() {
    // Write your go code here ...
    fmt.Println("Hello World from Golang")
    fmt.Println("Subscribe to Premium for more features")
}

`

const defaultCodeJava = `import java.io.*;

public class Main {
    public static void main(String args[]){
        // Write your java code here
        System.out.println("Hello World from Java");
        System.out.println("Subscribe to Premium for more features");
    }
}

`

const languageDefaultCodeMap = {
    "cpp": defaultCodeCpp,
    "python": defaultCodePython,
    "java": defaultCodeJava,
    "go": defaultCodeGo,
}

export { languageDefaultCodeMap }


