package com.uap.model

import scala.io.StdIn.{readInt, readLine}


object Principal extends App {

  var juego = new Juego()
  var op = "ok"

  while (op == "ok") {
  
    println("Serie " + juego.getValor0() + " , "+ juego.getValor1() + " ___ " + juego.getValor3())
    println()
    print(" Indique el valor faltante : ")
    val i = readInt()
    
    if (juego.isValid(i)) {
      println(" Ganaste !! Puntaje : " + juego.puntos)
    } else {
      println(" Perdiste !! Puntaje : " + juego.puntos)
    }
    
    println(" Si desea continuar ingrese ok : ")
    op = readLine()
  
  } 
  
  println(" chau !! ")
  
}