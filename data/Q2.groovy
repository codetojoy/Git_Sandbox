
println "School,Year,Level,Size"


def levels = []
levels << "K"
for (grade in 1..12) {
    levels << "Grade ${grade}"
}

levels.each { println '"' + it + '",' }
