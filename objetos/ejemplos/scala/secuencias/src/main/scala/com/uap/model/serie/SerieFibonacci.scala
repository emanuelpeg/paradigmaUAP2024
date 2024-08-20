package com.uap.model.serie

import scala.util.Random

/**
 * @author emanuel
 *
 */
class SerieFibonacci extends Serie {
  
 override def generate(): Seq[Int] =  {
   semilla = Random.nextInt(20) + 1
   
   def fibo(n:Int) : Int = n match {
     case 0 => 1
     case 1 => 1
     case _ => fibo(n-1) + fibo(n-2) 
   }
   
   for(i <- 0 to 3) yield fibo(i + semilla)
 }
 
  
}