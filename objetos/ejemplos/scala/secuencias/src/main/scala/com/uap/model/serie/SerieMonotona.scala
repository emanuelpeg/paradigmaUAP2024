package com.uap.model.serie

class SerieMonotona extends Serie {

  override def generate(): Seq[Int] =  for(i <- 0 to 3) yield this.semilla
}
