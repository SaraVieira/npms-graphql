module.exports = `
  type Query {
    search(search: String): Search
  }

  type Search {
    total: Int,
    results: [Results]
  }

type Detail {
  quality: Float,
  popularity: Float,
  maintenance: Float
}

type Score {
  final: Float,
  detail: Detail
}

  type Results {
    package: Package,
    score: Score,
    searchScore: Float
  }

  type Package {
    name: String,
    scope: String,
    version: Float,
    description: String,
    keywords: [String],
    date: String,
    links: Link
    author: Author,
    publisher: Maintainer,
    maintainers: [Maintainer]
  }

    type Author {
        name: String,
        email: String
    }

  type Maintainer {
    username: String,
    email: String
  }

  type Link {
      npm: String,
      homepage: String,
      repository: String
      bugs: String
  },
`
