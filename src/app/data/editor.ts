
enum ProgrammingLanguageID {
    C_11,
    CPP_20,
    JAVA_17,
    PYTHON_312,
    GO_121,
    JAVASCRIPT_NODE_20,
    RUBY_33
}

type ProgrammingLanguage = {
    id: ProgrammingLanguageID,
    name: string,
    monaco: string,
    available: boolean,
}

type BoilerPlateCode = {
    name: string,
    description: string,
    code: string,
}

const boilerPlateCDefault: string = `#include<stdio.h>

int main(int argc, char *argv[]){
    // Write your C code here ...
    printf("Hello World from C\\n");
    printf("Subscribe to Premium for more features\\n");

    return 0;
}

`

const boilerPlateCppDefault: string = `#include<iostream>
using namespace std;

int main(int argc, char *argv[]){
    // Write your C++ code here ...
    cout << "Hello World from C++" << endl;
    cout << "Subscribe to Premium for more features " << endl;

    return 0;
}

`

const boilerPlateCppCp1: string = `#include<iostream>
#include<cstdint>
#include<climits>
#include<vector>
#include<stack>
#include<queue>
#include<map>
#include<unordered_map>
#include<set>
#include<unordered_set>
#include<utility>
#include<tuple>
#include<algorithm>
#include<numeric>
using namespace std;

typedef long long int ll;
typedef long double ld;

void _print(int t) {cerr << t;}
void _print(long long int t) {cerr << t;}
void _print(string t) {cerr << t;}
void _print(char t) {cerr << t;}
void _print(long double t) {cerr << t;}
void _print(double t) {cerr << t;}

template <class T, class V> void _print(pair <T, V> p);
template <class T> void _print(vector <T> v);
template <class T> void _print(set <T> v);
template <class T> void _print(unordered_set <T> v);
template <class T> void _print(multiset <T> v);
template <class T, class V> void _print(map <T, V> v);
template <class T, class V> void _print(unordered_map <T, V> v);
template <class T, class V> void _print(pair <T, V> p) {cerr << "{"; _print(p.first); cerr << ","; _print(p.second); cerr << "}";}
template <class T> void _print(vector <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(set <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(unordered_set <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(multiset <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T, class V> void _print(map <T, V> v) {cerr << "[ "; for (auto i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T, class V> void _print(unordered_map <T, V> v) {cerr << "[ "; for (auto i : v) {_print(i); cerr << " ";} cerr << "]";}


int32_t main(int32_t argc, char *argv[]){

    int testcases = 1;
    cin >> testcases;

    for(int tt = 1; tt <= testcases ; tt++)
    {
        // Write your C++ code here ...
        
    }

    return 0;
}

`


const boilerPlateJavaDefault = `import java.io.*;

public class Main {
    public static void main(String args[]){
        // Write your java code here
        System.out.println("Hello World from Java");
        System.out.println("Subscribe to Premium for more features");
    }
}

`

const boilerPlatePythonDefault = `""" Write your python code here """

print("Hello World from Python")
print("Subscribe to Premium for more features")
`

const boilerPlateGoDefault = `package main

import (
    "fmt"
)

func main() {
    // Write your go code here ...
    fmt.Println("Hello World from Golang")
    fmt.Println("Subscribe to Premium for more features")
}

`

const boilerPlateJavascriptDefault = `// Write your Javascript code here

console.log("Hello World from Javascript")
console.log("Subscribe to Premium for more features")
`

const boilerPlateRubyDefault = `# Write your Ruby code here

puts "Hello World from Ruby"
puts "Subscribe to Premium for more features"
`



// maps langID to list of boilter plate code
// key and name must be same
const boilerPlateCodeMap: { [key in ProgrammingLanguageID]: { [key: string]: BoilerPlateCode } } = {
    [ProgrammingLanguageID.PYTHON_312]: {
        "default": {
            name: "default",
            description: "default",
            code: boilerPlatePythonDefault,
        },
    },
    [ProgrammingLanguageID.JAVASCRIPT_NODE_20]: {
        "default": {
            name: "default",
            description: "default",
            code: boilerPlateJavascriptDefault,
        },
    },
    [ProgrammingLanguageID.RUBY_33]: {
        "default": {
            name: "default",
            description: "default",
            code: boilerPlateRubyDefault,
        },
    },
    [ProgrammingLanguageID.C_11]: {
        "default": {
            name: "default",
            description: "default",
            code: boilerPlateCDefault
        },
    },
    [ProgrammingLanguageID.CPP_20]: {
        "default": {
            name: "default",
            description: "default",
            code: boilerPlateCppDefault
        },
        "cp1": {
            name: "cp1",
            description: "",
            code: boilerPlateCppCp1,
        }
    },
    [ProgrammingLanguageID.JAVA_17]: {
        "default": {
            name: "default",
            description: "default",
            code: boilerPlateJavaDefault
        },
    },
    [ProgrammingLanguageID.GO_121]: {
        "default": {
            name: "default",
            description: "default",
            code: boilerPlateGoDefault,
        },
    },

}

const programmingLanguageList: Array<ProgrammingLanguage> = [
    {
        id: ProgrammingLanguageID.PYTHON_312,
        name: 'Python 3.12',
        monaco: "python",
        available: true
    },
    {
        id: ProgrammingLanguageID.JAVASCRIPT_NODE_20,
        name: 'Javascript Node 20',
        monaco: "javascript",
        available: true
    },
    {
        id: ProgrammingLanguageID.RUBY_33,
        name: 'Ruby 3.3',
        monaco: "ruby",
        available: true
    },
    {
        id: ProgrammingLanguageID.C_11,
        name: 'GNU GCC C11',
        monaco: "c",
        available: true
    },
    {
        id: ProgrammingLanguageID.CPP_20,
        name: 'GNU G++20',
        monaco: "cpp",
        available: true
    },
    {
        id: ProgrammingLanguageID.JAVA_17,
        name: 'Java 17',
        monaco: "java",
        available: false,
    },
    {
        id: ProgrammingLanguageID.GO_121,
        name: 'Go 1.21',
        monaco: "go",
        available: false,
    },
]


export { programmingLanguageList, boilerPlateCodeMap }
export type { ProgrammingLanguage, BoilerPlateCode }


