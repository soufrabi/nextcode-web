
type ProgrammingLanguage = {
    id: number,
    name: string,
    monaco: string,
    defaultCode: string,
    available: boolean,
}

const defaultCodeC: string = `#include<stdio.h>

int main(int argc, char *argv[]){
    // Write your C code here ...
    printf("Hello World from C\\n");
    printf("Subscribe to Premium for more features\\n");

    return 0;
}

`

const defaultCodeCpp: string = `#include<iostream>
using namespace std;

int main(int argc, char *argv[]){
    // Write your C++ code here ...
    cout << "Hello World from C++" << endl;
    cout << "Subscribe to Premium for more features " << endl;

    return 0;
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

const defaultCodePython = `""" Write your python code here """

print("Hello World from Python")
print("Subscribe to Premium for more features")
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



const programmingLanguageDefaultCodeMap = {
    "c": defaultCodeC,
    "cpp": defaultCodeCpp,
    "java": defaultCodeJava,
    "python": defaultCodePython,
    "go": defaultCodeGo,
}

const programmingLanguageList: Array<ProgrammingLanguage> = [
    { id: 1, name: 'GNU GCC C11', monaco: "c", defaultCode: defaultCodeC, available: true },
    { id: 2, name: 'GNU G++20', monaco: "cpp", defaultCode: defaultCodeCpp, available: true },
    { id: 3, name: 'Java 17', monaco: "java", defaultCode: defaultCodeJava, available: true },
    // { id: 4, name: 'Python 3.12', monaco: "python", defaultCode: defaultCodePython, available: true },
    // { id: 5, name: 'Go 1.21', monaco:"go", defaultCode: defaultCodeGo, available: true },
]


export { programmingLanguageDefaultCodeMap, programmingLanguageList }
export type { ProgrammingLanguage }


