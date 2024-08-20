package com.uap.model.serie

import scala.util.Random
import scala.collection.immutable.List

/**
 * @author emanuel
 *
 */
class SerieImpar extends Serie {
 
  override def generate(): Seq[Int] =  
    for(i <- 0 to 3) yield if ((semilla%2)==0) (i * 2) + semilla + 1 else (i * 2) + semilla
  
}