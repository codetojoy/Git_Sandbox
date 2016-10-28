
def schools = new HashSet()

new File("simple.full.csv").eachLine { line ->
    def tokens = line.split(",")
    def school = tokens[0]
    schools << school
}

def list = []
list.addAll(schools)
list.sort()

list.each { println it }
