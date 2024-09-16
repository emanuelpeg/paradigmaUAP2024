
class PalindromeSuite extends munit.FunSuite {
  import Clase1.isPalindrome

  test("empty List is palindrome") {
    assert(isPalindrome(List()))
  }

  test("a is palindrome") {
    assert(isPalindrome(List('a')))
  }
  
  test("ala is palindrome") {
    assert(isPalindrome(List('a','l','a')))
  }

  test("alla is palindrome") {
    assert(isPalindrome(List('a', 'l', 'l', 'a')))
  }

  test("halla is not a palindrome") {
    assert(!isPalindrome(List('h','a', 'l', 'l', 'a')))
  }

  test("uap is not a palindrome") {
    assert(!isPalindrome(List('u', 'a', 'p')))
  }
}
