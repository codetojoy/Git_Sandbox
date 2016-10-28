
println "Family,Year,Level,Size"

def schools = ["Bluefield Family of Schools", "Charlottetown Rural Family of Schools"]

def levels = []
levels << "K"
for (grade in 1..12) {
    levels << "Grade ${grade}"
}

def random = new Random()

schools.each { school ->
    for (year in 1999..2015) {
        for (level in levels) {
            def size = 10 + random.nextInt(100)
            println "${school},${year},${level},${size}"
        }
    }
}
