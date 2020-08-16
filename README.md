# Hive-System

an abstract representation of a hive-like system
![image of hive](https://miro.medium.com/max/1023/1*iqmf52QY3q6n9j-PUEgVyQ.jpeg)

The module consists of a mainframe Hive which contains HiveCells and manages them.
Each HiveCell is made of a predefined Material which has basic statistics like hardness, fireproofness (dont know if its a word) and its name

To do:

> HiveCells are to have a work option which is going to take final product as an argument, it is going to self-maintain the production of the final item, use materials, ask mainframe for them if needed, then mainframe checks all of its childs. If the material is lacking it is to give order to MiningHiveCell(inheritants of HiveCell) to mine for that material

Specialisation of HiveCells (HiveCells inheritants): > MiningHiveCell
