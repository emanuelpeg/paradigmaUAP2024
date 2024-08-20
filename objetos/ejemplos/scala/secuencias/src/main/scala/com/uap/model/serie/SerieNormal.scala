package com.uap.model.serie

import scala.util.Random

class SerieNormal extends Serie {

  override def generate(): Seq[Int] = for(i <- 0 to 3) yield (i + semilla) 
  
}