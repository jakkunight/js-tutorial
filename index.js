#!/usr/bin/env node

// VARIABLES AND EXPRESSIONS:

/**
 * <var|let> <name> [= <value>];
 * <const> <name> = <value>;
 * 
 */

// INPUT AND OUTPUT ON COMMANDLINE (aka TERMINAL or CONSOLE) + FINISH:

/**
 * process.exit(<status>);
 * 
 * console.log(<expression>);
 * 
 * const readline = require("readline").createInterface({
 *     input: process.stdin,
 *     output: process.stdout
 * });
 * 
 * 
 * // We're going to use the one redefined on the "lib.js" file.
 * 
 */

// ASYNC CODE:

/**
 * Callbacks:
 * 
 * somethiing_heavy(<params>, (<result>, <error>) => {
 *     <sentences>
 * });
 * 
 * Promises:
 * 
 * somethiing_heavy(<params>)
 *     .then((<result>) => {
 *         <something_to_handle_the_result>
 *     })
 *     [
 *         .then(<another_function>)
 *         .then(<another_function>)
 *         <...>
 *     ]
 *     .catch((error) => {
 *         <something_to_handle_the_error>
 *     });
 * 
 * Async-Await:
 * async (<params>) => {
 *     try{
 *         const result = await some_heavy_process(<params>);
 *         [
 *             const result = await some_heavy_process(<params>);
 *             const result = await some_heavy_process(<params>);
 *             <...>
 *         ]
 *     }catch(error){
 *         <error_handling>
 *     }
 * };
 */

// BLOCKS:

/**
 * <instruction1>
 * <instruction2>
 * <instruction3>
 * <...>
 */

// CONDITIONALS:

/**
 * if(<condition>){
 *     <block>
 * }
 * [
 *     else{
 *         <block>
 *     }
 * ]
 */

// LOOPS:

/**
 * while(<condition>){
 *     <block>
 * }
 * 
 * do{
 *     <block>
 * }while(<condition>);
 * 
 * for(let i = <initial_value>; i < <end_value>; i++){
 *     <block>
 * }
 * 
 */

// FUNCTIONS:

/**
 * Arrow:
 * 
 * [const fn = [async]] (<params>) => {
 *     <block>
 * };
 * 
 * Function:
 * 
 * [async] function [fn] (<params>){
 *     <block>
 * };
 * 
 */

// DATA STRUCTURES:

// OBJECTS:

// JSON:

const question = require("./lib.js");

const main = async () => {
    try{
        
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

main();