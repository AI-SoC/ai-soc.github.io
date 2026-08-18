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


// Session 1: Near-Memory & Memory Processing Systems
DB[00] = new Array("1A", "color-oral-01", "1A", "May. 28, 2026 (Wednesday)", "10:00", "Room A", "Chair: Daejin Park (Kyungpook National University, Korea)", "Near-Memory & Memory Processing Systems", "1A-1", "BAAP - Coupling Compute-in-SRAM with DRAM Banks for Near-Memory Processing", "<b>Heejee Yun, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "1B");
DB[01] = new Array("", "", "", "", "", "", "", "", "1A-2", "dae4hls - Exposing Memory-Level Parallelism for High-Level Synthesis using Explicit Decoupling", "<b>Gihyun Jeon, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[02] = new Array("", "", "", "", "", "", "", "", "1A-3", "E-ReCON: An Energy- and Resource-Efficient Precision-Configurable Sparse nvCIM Macro for Edge", "<b>Jiwon Jo, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[03] = new Array("", "", "", "", "", "", "", "", "1A-4", "A Software Caching Runtime for Embedded NVRAM Systems", "<b>Jaehyun Park, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");


// Session 2: Acceleration & Neural Networks for Hardware
DB[04] = new Array("1B", "color-oral-02", "1B", "May. 28, 2026 (Wednesday)", "11:00", "Room A", "Chair: Daejin Park (Kyungpook National University, Korea)", "Acceleration & Neural Networks for Hardware", "1B-1", "DCT: Dimensional Collapse Tiling for Tensor Operators on Attention Accelerators", "<b>Seunghyun Park, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "1C");
DB[05] = new Array("", "", "", "", "", "", "", "", "1B-2", "Ariel-ML - Embedded Rust Leveraging Multicore for Neural Networks on Heterogeneous Microcontrollers", "<b>Minjung Kim, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[06] = new Array("", "", "", "", "", "", "", "", "1B-3", "A Feature Distillation Network to Enable Object Detection on an FPGA Platform in Poor Visibility Conditions", "<b>Hyunjun Lee, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[07] = new Array("", "", "", "", "", "", "", "", "1B-4", "Time-Predictable Acceleration of Deep Neural Networks on FPGA SoCs with Multi-Core DPUs", "<b>Hyunjae Kim, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");


// Session 3: RISC-V & Reconfigurable Processors
DB[08] = new Array("1C", "color-oral-03", "1C", "May. 28, 2026 (Wednesday)", "13:00", "Room A", "Chair: Daejin Park (Kyungpook National University, Korea)", "RISC-V & Reconfigurable Processors", "1C-1", "Buckbeak: A 1.2 TFLOPS W Reconfigurable Vector Scalar RISC-V Processor for Precision Scalable", "<b>Hoseong Kim, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "1D");
DB[09] = new Array("", "", "", "", "", "", "", "", "1C-2", "A Self-Testing Framework for Verification and Validation of a RISC-V-Based System with a Co-processor", "<b>Joonghyun Ahn, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[10] = new Array("", "", "", "", "", "", "", "", "1C-3", "A Lightweight Convolution-Aware RISC-V Soft Processor for Intelligent Wearable Systems", "<b>Junyeong Cha, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");


// Session 4: Edge Computing & Intelligent Systems
DB[11] = new Array("1D", "color-oral-04", "1D", "May. 28, 2026 (Wednesday)", "14:00", "Room A", "Chair: Daejin Park (Kyungpook National University, Korea)", "Edge Computing & Intelligent Systems", "1D-1", "TinySLFL: A Flash-Endurance-Aware Federated Edge Learning Framework with Layer-Wise Delayed", "<b>Seungseop Kim, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "1E");
DB[12] = new Array("", "", "", "", "", "", "", "", "1D-2", "Efficient Layer-Granularity Unloading for LLMs in Edge Computing", "<b>Yonghun Lee, Daejin Park</b> (Gaonchips, Kyungpook National University, Korea)<br>", "", "", "");
DB[13] = new Array("", "", "", "", "", "", "", "", "1D-3", "Online Algorithms for Data Sharing-Aware Task Allocation in Edge Computing Systems", "<b>Myeongjin Kang, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[14] = new Array("", "", "", "", "", "", "", "", "1D-4", "GraphDelta: A distributed incremental framework for efficient dynamic graph computing in edge intelligence", "<b>Sunghoon Hong, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");


// Session 5: Optimization & System Applications
DB[15] = new Array("1E", "color-oral-05", "1E", "May. 28, 2026 (Wednesday)", "15:00", "Room A", "Chair: Daejin Park (Kyungpook National University, Korea)", "Optimization & System Applications", "1E-1", "Provisioning to Runtime Optimization of a 100 MW-Scale AI Cluster", "<b>Janghun Lee, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "1F");
DB[16] = new Array("", "", "", "", "", "", "", "", "1E-2", "HIRL: Hierarchical Reinforcement Learning for Coordinated Resource Management in Heterogeneous", "<b>Jaeyoung Kim, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[17] = new Array("", "", "", "", "", "", "", "", "1E-3", "A high-throughput pipelined FPGA and ASIC architecture for real-time multimodal ECG-PCG cardiac", "<b>Dongkyu Lee, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[18] = new Array("", "", "", "", "", "", "", "", "1E-4", "Battery Management Systems Introduction", "<b>Kihyeon Seong, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");
DB[19] = new Array("", "", "", "", "", "", "", "", "1E-5", "A Novel Field-Programmable Gate Array-Based Self-Sustaining Current Balancing Approach for Silicon", "<b>Jongyun Byeon, Daejin Park</b> (Kyungpook National University, Korea)<br>", "", "", "");

DB[20] = new Array("", "", "", "", "", "", "", "", "1E-6", "End of Symposium", "", "", "", "");

