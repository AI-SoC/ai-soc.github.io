 /*ORDER 
NAME anchor = SESSION CODE 

		0						 1							2							3			4				5				6				7									8						9					10				11			12				13			
Session CODE / COLOR CSS / Session Name / Date / Time /  Room / Chair / Session Topic / Paper Code / Paper Title / Author / Belong / PDF / name anchor

SEARCH AREA: Session Topic / Paper Title / Author & Belong  
*/

/* ARRAY 
DB		Oral
PS		Poster
*/

DB = new Array();
PS = new Array();


// Intro 
DB[00] = new Array("1A","color-oral-01","1A","Aug. 30, 2022","09:00 ~ 09:50","Room A","Lecturer: Daejin Park (Kyungpook National University, Korea)","Introduction to Embedded System Programming","1A-1","Why/Where/What about Embedded System Programming ?","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","1A");

// Tool
DB[01] = new Array("1B","color-oral-02","1B","Aug. 30, 2022","10:00 ~ 11:50","Room A","Lecturer: Daejin Park (Kyungpook National University, Korea)","Software Installation","1B-1","Programming Environment Installation (Ubuntu, Visual Studio Code)","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","1B");

DB[02] = new Array("","","","","","","","","1B-2","Integrating Visual Studio Code on WSL","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

// Git
DB[03] = new Array("1C","color-oral-03","1C","Aug. 30, 2022","13:00 ~ 13:50","Room A","Lecturer: Daejin Park (Kyungpook National University, Korea)","Collaborative Compilation","1C-1","Integrating Projects with Git Repository","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","1C");

DB[04] = new Array("","","","","","","","","1C-2","Version Control Concept","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

// Git
DB[05] = new Array("1D","color-oral-04","1D","Aug. 30, 2022","14:00 ~ 16:50","Room A","Lecturer: Daejin Park (Kyungpook National University, Korea)","Variable Allocation on Memory","1D-1","Building Multiple Files","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","1D");

DB[06] = new Array("","","","","","","","","1D-2","Variable Liveness Scope","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

DB[07] = new Array("","","","","","","","","1D-3","Variable Allocation at Specific Address on Memory","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");


// Git
DB[08] = new Array("2A","color-oral-05","2A","Aug. 31, 2022","09:00 ~ 13:50","Room A","Lecturer: Daejin Park (Kyungpook National University, Korea)","Advanced C Programming","2A-1","Traversing Array via Pointer","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","2A");

DB[09] = new Array("","","","","","","","","2A-2","Enumeration-based Constant Abstraction","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

DB[10] = new Array("","","","","","","","","2A-3","Pointing Everything by void*","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

DB[11] = new Array("","","","","","","","","2A-4","Transforming Program Behavior using Function Pointer","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

// Git
DB[12] = new Array("2B","color-oral-06","2B","Aug. 31, 2022","14:00 ~ 16:50","Room A","Lecturer: Daejin Park (Kyungpook National University, Korea)","Accessing via Memory-Mapped I/O","2B-1","Using volatile for Explicit Memory I/O","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","2B");

DB[13] = new Array("","","","","","","","","2B-2","Allocating Structured Multi-Bytes Data on Memory using struct","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

DB[14] = new Array("","","","","","","","","2B-3","Representing Data on Memory as Various Views using union","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

// Git
DB[15] = new Array("3A","color-oral-07","3A","Sept. 1, 2022","09:00 ~ 11:50","Room A","Lecturer: Daejin Park (Kyungpook National University, Korea)","Code Memory and Data Memory","2B-1","Bit Representation","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","3A");

DB[16] = new Array("","","","","","","","","2B-2","Layout Instruction on Code Memory, and Allocating Variables on Data Memory","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

// Git
DB[17] = new Array("3B","color-oral-08","3B","Sept. 1, 2022","13:00 ~ 16:50","Room A","Lecturer: Daejin Park (Kyungpook National University, Korea)","Code Memory and Data Memory","3B-1","Bit Manipulation to Control Hardware","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","3B");

DB[18] = new Array("","","","","","","","","3B-2","Hardware Memory Allocation to Access On-Chip Hardware via Memory Mapped I/O","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");

DB[19] = new Array("","","","","","","","","3B-3","Bus Architecture-based Polling & Interrupt-Driven Software Execution","<b>Daejin Park</b> (Kyungpook National University, Korea)<br>","","","");


