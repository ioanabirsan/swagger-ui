var schemaOrg = {
  "@context": {
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@graph": [
    {
      "@id": "http://schema.org/CafeOrCoffeeShop",
      "@type": "rdfs:Class",
      "rdfs:comment": "A cafe or coffee shop.",
      "rdfs:label": "CafeOrCoffeeShop",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/UserLikes",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserLikes",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/downloadUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "If the file can be downloaded, URL to download the binary.",
      "rdfs:label": "downloadUrl"
    },
    {
      "@id": "http://schema.org/pagination",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Chapter"
        },
        {
          "@id": "http://schema.org/PublicationIssue"
        },
        {
          "@id": "http://schema.org/PublicationVolume"
        },
        {
          "@id": "http://schema.org/Article"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/ontology/bibo/pages"
      },
      "rdfs:comment": "Any description of pages that is not separated into pageStart and pageEnd; for example, \"1-6, 9, 55\" or \"10-12, 46-49\".",
      "rdfs:label": "pagination"
    },
    {
      "@id": "http://schema.org/about",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1670"
      },
      "http://schema.org/category": "issue-1670",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/CommunicateAction"
        }
      ],
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/subjectOf"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "The subject matter of the content.",
      "rdfs:label": "about"
    },
    {
      "@id": "http://schema.org/Recipe",
      "@type": "rdfs:Class",
      "rdfs:comment": "A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via <a class=\"localLink\" href=\"http://schema.org/suitableForDiet\">suitableForDiet</a>. The <a class=\"localLink\" href=\"http://schema.org/keywords\">keywords</a> property can also be used to add more detail.",
      "rdfs:label": "Recipe",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HowTo"
      }
    },
    {
      "@id": "http://schema.org/gameItem",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Game"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.",
      "rdfs:label": "gameItem"
    },
    {
      "@id": "http://schema.org/Photograph",
      "@type": "rdfs:Class",
      "rdfs:comment": "A photograph.",
      "rdfs:label": "Photograph",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/Volcano",
      "@type": "rdfs:Class",
      "rdfs:comment": "A volcano, like Fuji san.",
      "rdfs:label": "Volcano",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Landform"
      }
    },
    {
      "@id": "http://schema.org/departureStation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TrainTrip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/TrainStation"
      },
      "rdfs:comment": "The station from which the train departs.",
      "rdfs:label": "departureStation"
    },
    {
      "@id": "http://schema.org/SportsTeam",
      "@type": "rdfs:Class",
      "rdfs:comment": "Organization: Sports team.",
      "rdfs:label": "SportsTeam",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SportsOrganization"
      }
    },
    {
      "@id": "http://schema.org/GroceryStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A grocery store.",
      "rdfs:label": "GroceryStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/True",
      "@type": "http://schema.org/Boolean",
      "rdfs:comment": "The boolean value true.",
      "rdfs:label": "True"
    },
    {
      "@id": "http://schema.org/Demand",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.",
      "rdfs:label": "Demand",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/musicCompositionForm",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The type of composition (e.g. overture, sonata, symphony, etc.).",
      "rdfs:label": "musicCompositionForm"
    },
    {
      "@id": "http://schema.org/AboutPage",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web page type: About page.",
      "rdfs:label": "AboutPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/result",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Action"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "The result produced in the action. e.g. John wrote <em>a book</em>.",
      "rdfs:label": "result"
    },
    {
      "@id": "http://schema.org/isbn",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Book"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/ontology/bibo/isbn"
      },
      "rdfs:comment": "The ISBN of the book.",
      "rdfs:label": "isbn",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/ExerciseAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of participating in exertive activity for the purposes of improving health and fitness.",
      "rdfs:label": "ExerciseAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlayAction"
      }
    },
    {
      "@id": "http://schema.org/UserPlays",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserPlays",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/occupationLocation",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Occupation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/AdministrativeArea"
      },
      "rdfs:comment": "The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.",
      "rdfs:label": "occupationLocation"
    },
    {
      "@id": "http://schema.org/FoodService",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A food service, like breakfast, lunch, or dinner.",
      "rdfs:label": "FoodService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Service"
      }
    },
    {
      "@id": "http://schema.org/EBook",
      "@type": "http://schema.org/BookFormatType",
      "rdfs:comment": "Book format: Ebook.",
      "rdfs:label": "EBook"
    },
    {
      "@id": "http://schema.org/SeaBodyOfWater",
      "@type": "rdfs:Class",
      "rdfs:comment": "A sea (for example, the Caspian sea).",
      "rdfs:label": "SeaBodyOfWater",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BodyOfWater"
      }
    },
    {
      "@id": "http://schema.org/accessibilitySummary",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1100"
      },
      "http://schema.org/category": "issue-1110",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as \"short descriptions are present but long descriptions will be needed for non-visual users\" or \"short descriptions are present and no long descriptions are needed.\"",
      "rdfs:label": "accessibilitySummary"
    },
    {
      "@id": "http://schema.org/Trip",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism"
      },
      "rdfs:comment": "A trip or journey. An itinerary of visits to one or more places.",
      "rdfs:label": "Trip",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/VeganDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet exclusive of all animal products.",
      "rdfs:label": "VeganDiet"
    },
    {
      "@id": "http://schema.org/serviceArea",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ContactPoint"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeoShape"
        },
        {
          "@id": "http://schema.org/AdministrativeArea"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/areaServed"
      },
      "rdfs:comment": "The geographic area where the service is provided.",
      "rdfs:label": "serviceArea"
    },
    {
      "@id": "http://schema.org/Dataset",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass"
      },
      "http://www.w3.org/2002/07/owl#equivalentClass": [
        {
          "@id": "http://purl.org/dc/dcmitype/Dataset"
        },
        {
          "@id": "http://www.w3.org/ns/dcat#Dataset"
        },
        {
          "@id": "http://rdfs.org/ns/void#Dataset"
        }
      ],
      "rdfs:comment": "A body of structured information describing some topic(s) of interest.",
      "rdfs:label": "Dataset",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/DigitalAudioTapeFormat",
      "@type": "http://schema.org/MusicReleaseFormatType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "DigitalAudioTapeFormat.",
      "rdfs:label": "DigitalAudioTapeFormat"
    },
    {
      "@id": "http://schema.org/memberOf",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/member"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/ProgramMembership"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "An Organization (or ProgramMembership) to which this Person or Organization belongs.",
      "rdfs:label": "memberOf"
    },
    {
      "@id": "http://schema.org/Action",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass"
      },
      "rdfs:comment": "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.<br/><br/>\n\nSee also <a href=\"http://blog.schema.org/2014/04/announcing-schemaorg-actions.html\">blog post</a> and <a href=\"http://schema.org/docs/actions.html\">Actions overview document</a>.",
      "rdfs:label": "Action",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Thing"
      }
    },
    {
      "@id": "http://schema.org/InsuranceAgency",
      "@type": "rdfs:Class",
      "rdfs:comment": "An Insurance agency.",
      "rdfs:label": "InsuranceAgency",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialService"
      }
    },
    {
      "@id": "http://schema.org/DamagedCondition",
      "@type": "http://schema.org/OfferItemCondition",
      "rdfs:comment": "Indicates that the item is damaged.",
      "rdfs:label": "DamagedCondition"
    },
    {
      "@id": "http://schema.org/nextItem",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ListItem"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ListItem"
      },
      "rdfs:comment": "A link to the ListItem that follows the current one.",
      "rdfs:label": "nextItem"
    },
    {
      "@id": "http://schema.org/AudioObject",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      },
      "rdfs:comment": "An audio file.",
      "rdfs:label": "AudioObject",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MediaObject"
      }
    },
    {
      "@id": "http://schema.org/recordingOf",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRecording"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/recordedAs"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "rdfs:comment": "The composition this track is a recording of.",
      "rdfs:label": "recordingOf"
    },
    {
      "@id": "http://schema.org/geoWithin",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.",
      "rdfs:label": "geoWithin"
    },
    {
      "@id": "http://schema.org/TaxiReservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservation for a taxi.<br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class=\"localLink\" href=\"http://schema.org/Offer\">Offer</a>.",
      "rdfs:label": "TaxiReservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/audienceType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Audience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).",
      "rdfs:label": "audienceType"
    },
    {
      "@id": "http://schema.org/broadcastFrequency",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1004"
      },
      "http://schema.org/category": "issue-1004",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/BroadcastChannel"
        },
        {
          "@id": "http://schema.org/BroadcastService"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/BroadcastFrequencySpecification"
        }
      ],
      "rdfs:comment": "The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. \"87 FM\".",
      "rdfs:label": "broadcastFrequency"
    },
    {
      "@id": "http://schema.org/appliesToPaymentMethod",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PaymentChargeSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PaymentMethod"
      },
      "rdfs:comment": "The payment method(s) to which the payment charge specification applies.",
      "rdfs:label": "appliesToPaymentMethod"
    },
    {
      "@id": "http://schema.org/AlbumRelease",
      "@type": "http://schema.org/MusicAlbumReleaseType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "AlbumRelease.",
      "rdfs:label": "AlbumRelease"
    },
    {
      "@id": "http://schema.org/interactionService",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/SoftwareApplication"
        },
        {
          "@id": "http://schema.org/WebSite"
        }
      ],
      "rdfs:comment": "The WebSite or SoftwareApplication where the interactions took place.",
      "rdfs:label": "interactionService"
    },
    {
      "@id": "http://schema.org/SoldOut",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item has sold out.",
      "rdfs:label": "SoldOut"
    },
    {
      "@id": "http://schema.org/targetDescription",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AlignmentObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The description of a node in an established educational framework.",
      "rdfs:label": "targetDescription"
    },
    {
      "@id": "http://schema.org/Vehicle",
      "@type": "rdfs:Class",
      "rdfs:comment": "A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.",
      "rdfs:label": "Vehicle",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Product"
      }
    },
    {
      "@id": "http://schema.org/geoContains",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "rdfs:comment": "Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. \"a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.",
      "rdfs:label": "geoContains"
    },
    {
      "@id": "http://schema.org/photo",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/ImageObject"
        },
        {
          "@id": "http://schema.org/Photograph"
        }
      ],
      "rdfs:comment": "A photograph of this place.",
      "rdfs:label": "photo",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/image"
      }
    },
    {
      "@id": "http://schema.org/ratingValue",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Rating"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The rating for the content.<br/><br/>\n\nUsage guidelines:<br/><br/>\n\n<ul>\n<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n</ul>\n",
      "rdfs:label": "ratingValue"
    },
    {
      "@id": "http://schema.org/address",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/GeoShape"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/GeoCoordinates"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/PostalAddress"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Physical address of the item.",
      "rdfs:label": "address"
    },
    {
      "@id": "http://schema.org/educationalAlignment",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/AlignmentObject"
      },
      "rdfs:comment": "An alignment to an established educational framework.",
      "rdfs:label": "educationalAlignment"
    },
    {
      "@id": "http://schema.org/startTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/FoodEstablishmentReservation"
        },
        {
          "@id": "http://schema.org/Action"
        },
        {
          "@id": "http://schema.org/MediaObject"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from <em>January</em> to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.<br/><br/>\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.",
      "rdfs:label": "startTime"
    },
    {
      "@id": "http://schema.org/spouse",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "The person's spouse.",
      "rdfs:label": "spouse"
    },
    {
      "@id": "http://schema.org/uploadDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "Date when this media object was uploaded to this site.",
      "rdfs:label": "uploadDate"
    },
    {
      "@id": "http://schema.org/AutoPartsStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "An auto parts store.",
      "rdfs:label": "AutoPartsStore",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/AutomotiveBusiness"
        },
        {
          "@id": "http://schema.org/Store"
        }
      ]
    },
    {
      "@id": "http://schema.org/manufacturer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/DietarySupplement"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Drug"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The manufacturer of the product.",
      "rdfs:label": "manufacturer"
    },
    {
      "@id": "http://schema.org/WPAdBlock",
      "@type": "rdfs:Class",
      "rdfs:comment": "An advertising section of the page.",
      "rdfs:label": "WPAdBlock",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPageElement"
      }
    },
    {
      "@id": "http://schema.org/SomeProducts",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A placeholder for multiple similar products of the same kind.",
      "rdfs:label": "SomeProducts",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Product"
      }
    },
    {
      "@id": "http://schema.org/urlTemplate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EntryPoint"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An url template (RFC6570) that will be used to construct the target of the execution of the action.",
      "rdfs:label": "urlTemplate"
    },
    {
      "@id": "http://schema.org/MoveAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of an agent relocating to a place.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/TransferAction\">TransferAction</a>: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.</li>\n</ul>\n",
      "rdfs:label": "MoveAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/CreativeWork",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      },
      "rdfs:comment": "The most generic kind of creative work, including books, movies, photographs, software programs, etc.",
      "rdfs:label": "CreativeWork",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Thing"
      }
    },
    {
      "@id": "http://schema.org/upvoteCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Comment"
        },
        {
          "@id": "http://schema.org/Question"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of upvotes this question, answer or comment has received from the community.",
      "rdfs:label": "upvoteCount"
    },
    {
      "@id": "http://schema.org/sku",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
      "rdfs:label": "sku",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/AddAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of editing by adding an object to a collection.",
      "rdfs:label": "AddAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UpdateAction"
      }
    },
    {
      "@id": "http://schema.org/broadcastChannelId",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.",
      "rdfs:label": "broadcastChannelId"
    },
    {
      "@id": "http://schema.org/JewelryStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A jewelry store.",
      "rdfs:label": "JewelryStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/ViewAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of consuming static visual content.",
      "rdfs:label": "ViewAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ConsumeAction"
      }
    },
    {
      "@id": "http://schema.org/WPFooter",
      "@type": "rdfs:Class",
      "rdfs:comment": "The footer section of the page.",
      "rdfs:label": "WPFooter",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPageElement"
      }
    },
    {
      "@id": "http://schema.org/associatedMedia",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "rdfs:comment": "A media object that encodes this CreativeWork. This property is a synonym for encoding.",
      "rdfs:label": "associatedMedia"
    },
    {
      "@id": "http://schema.org/QAPage",
      "@type": "rdfs:Class",
      "rdfs:comment": "A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).",
      "rdfs:label": "QAPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/HomeGoodsStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A home goods store.",
      "rdfs:label": "HomeGoodsStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/query",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SearchAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A sub property of instrument. The query used on this action.",
      "rdfs:label": "query",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/instrument"
      }
    },
    {
      "@id": "http://schema.org/sameAs",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.",
      "rdfs:label": "sameAs"
    },
    {
      "@id": "http://schema.org/funder",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MonetaryGrant"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A person or organization that supports (sponsors) something through some kind of financial contribution.",
      "rdfs:label": "funder",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/sponsor"
      }
    },
    {
      "@id": "http://schema.org/LikeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants.",
      "rdfs:label": "LikeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ReactAction"
      }
    },
    {
      "@id": "http://schema.org/PublicationEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.",
      "rdfs:label": "PublicationEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/Course",
      "@type": "rdfs:Class",
      "rdfs:comment": "A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.",
      "rdfs:label": "Course",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/MobileApplication",
      "@type": "rdfs:Class",
      "rdfs:comment": "A software application designed specifically to work well on a mobile device such as a telephone.",
      "rdfs:label": "MobileApplication",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SoftwareApplication"
      }
    },
    {
      "@id": "http://schema.org/colleagues",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/colleague"
      },
      "rdfs:comment": "A colleague of the person.",
      "rdfs:label": "colleagues"
    },
    {
      "@id": "http://schema.org/ParcelService",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A private parcel service as the delivery mode available for a certain offer.<br/><br/>\n\nCommonly used values:<br/><br/>\n\n<ul>\n<li>http://purl.org/goodrelations/v1#DHL</li>\n<li>http://purl.org/goodrelations/v1#FederalExpress</li>\n<li>http://purl.org/goodrelations/v1#UPS</li>\n</ul>\n",
      "rdfs:label": "ParcelService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/DeliveryMethod"
      }
    },
    {
      "@id": "http://schema.org/Code",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/SoftwareSourceCode"
      },
      "rdfs:comment": "Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.",
      "rdfs:label": "Code",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/playerType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Player type required&#x2014;for example, Flash or Silverlight.",
      "rdfs:label": "playerType"
    },
    {
      "@id": "http://schema.org/unitCode",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/TypeAndQuantityNode"
        },
        {
          "@id": "http://schema.org/UnitPriceSpecification"
        },
        {
          "@id": "http://schema.org/PropertyValue"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.",
      "rdfs:label": "unitCode"
    },
    {
      "@id": "http://schema.org/productionDate",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Vehicle"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The date of production of the item, e.g. vehicle.",
      "rdfs:label": "productionDate"
    },
    {
      "@id": "http://schema.org/OrderReturned",
      "@type": "http://schema.org/OrderStatus",
      "rdfs:comment": "OrderStatus representing that an order has been returned.",
      "rdfs:label": "OrderReturned"
    },
    {
      "@id": "http://schema.org/HowTo",
      "@type": "rdfs:Class",
      "rdfs:comment": "Instructions that explain how to achieve a result by performing a sequence of steps.",
      "rdfs:label": "HowTo",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/PoliceStation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A police station.",
      "rdfs:label": "PoliceStation",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/CivicStructure"
        },
        {
          "@id": "http://schema.org/EmergencyService"
        }
      ]
    },
    {
      "@id": "http://schema.org/LeftHandDriving",
      "@type": "http://schema.org/SteeringPositionValue",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "The steering position is on the left side of the vehicle (viewed from the main direction of driving).",
      "rdfs:label": "LeftHandDriving"
    },
    {
      "@id": "http://schema.org/latitude",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GeoCoordinates"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The latitude of a location. For example <code>37.42242</code> (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>).",
      "rdfs:label": "latitude"
    },
    {
      "@id": "http://schema.org/arrivalAirport",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Airport"
      },
      "rdfs:comment": "The airport where the flight terminates.",
      "rdfs:label": "arrivalAirport"
    },
    {
      "@id": "http://schema.org/DigitalDocument",
      "@type": "rdfs:Class",
      "rdfs:comment": "An electronic file or document.",
      "rdfs:label": "DigitalDocument",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/bestRating",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Rating"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.",
      "rdfs:label": "bestRating"
    },
    {
      "@id": "http://schema.org/HealthClub",
      "@type": "rdfs:Class",
      "rdfs:comment": "A health club.",
      "rdfs:label": "HealthClub",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/HealthAndBeautyBusiness"
        },
        {
          "@id": "http://schema.org/SportsActivityLocation"
        }
      ]
    },
    {
      "@id": "http://schema.org/DrinkAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of swallowing liquids.",
      "rdfs:label": "DrinkAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ConsumeAction"
      }
    },
    {
      "@id": "http://schema.org/softwareRequirements",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).",
      "rdfs:label": "softwareRequirements"
    },
    {
      "@id": "http://schema.org/DownloadAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of downloading an object.",
      "rdfs:label": "DownloadAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TransferAction"
      }
    },
    {
      "@id": "http://schema.org/typeOfGood",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/OwnershipInfo"
        },
        {
          "@id": "http://schema.org/TypeAndQuantityNode"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Service"
        }
      ],
      "rdfs:comment": "The product that this structured value is referring to.",
      "rdfs:label": "typeOfGood"
    },
    {
      "@id": "http://schema.org/TireShop",
      "@type": "rdfs:Class",
      "rdfs:comment": "A tire shop.",
      "rdfs:label": "TireShop",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/Synagogue",
      "@type": "rdfs:Class",
      "rdfs:comment": "A synagogue.",
      "rdfs:label": "Synagogue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlaceOfWorship"
      }
    },
    {
      "@id": "http://schema.org/numberOfForwardGears",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The total number of forward gears available for the transmission system of the vehicle.<br/><br/>\n\nTypical unit code(s): C62",
      "rdfs:label": "numberOfForwardGears"
    },
    {
      "@id": "http://schema.org/AnimalShelter",
      "@type": "rdfs:Class",
      "rdfs:comment": "Animal shelter.",
      "rdfs:label": "AnimalShelter",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/actionStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Action"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ActionStatusType"
      },
      "rdfs:comment": "Indicates the current disposition of the Action.",
      "rdfs:label": "actionStatus"
    },
    {
      "@id": "http://schema.org/audio",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Clip"
        },
        {
          "@id": "http://schema.org/AudioObject"
        }
      ],
      "rdfs:comment": "An embedded audio object.",
      "rdfs:label": "audio"
    },
    {
      "@id": "http://schema.org/deathDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "Date of death.",
      "rdfs:label": "deathDate"
    },
    {
      "@id": "http://schema.org/WorkersUnion",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/243"
      },
      "http://schema.org/category": "issue-243",
      "rdfs:comment": "A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying.",
      "rdfs:label": "WorkersUnion",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/PreOrder",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item is available for pre-order, but will be delivered when generally available.",
      "rdfs:label": "PreOrder"
    },
    {
      "@id": "http://schema.org/workExample",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/exampleOfWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.",
      "rdfs:label": "workExample"
    },
    {
      "@id": "http://schema.org/jobLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "A (typically single) geographic location associated with the job position.",
      "rdfs:label": "jobLocation"
    },
    {
      "@id": "http://schema.org/HowToSection",
      "@type": "rdfs:Class",
      "rdfs:comment": "A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).",
      "rdfs:label": "HowToSection",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/ItemList"
        },
        {
          "@id": "http://schema.org/ListItem"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ]
    },
    {
      "@id": "http://schema.org/seasons",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWorkSeason"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/season"
      },
      "rdfs:comment": "A season in a media series.",
      "rdfs:label": "seasons"
    },
    {
      "@id": "http://schema.org/MusicAlbum",
      "@type": "rdfs:Class",
      "rdfs:comment": "A collection of music tracks.",
      "rdfs:label": "MusicAlbum",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MusicPlaylist"
      }
    },
    {
      "@id": "http://schema.org/mileageFromOdometer",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The total distance travelled by the particular vehicle since its initial production, as read from its odometer.<br/><br/>\n\nTypical unit code(s): KMT for kilometers, SMI for statute miles",
      "rdfs:label": "mileageFromOdometer"
    },
    {
      "@id": "http://schema.org/Person",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      },
      "http://www.w3.org/2002/07/owl#equivalentClass": {
        "@id": "http://xmlns.com/foaf/0.1/Person"
      },
      "rdfs:comment": "A person (alive, dead, undead, or fictional).",
      "rdfs:label": "Person",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Thing"
      }
    },
    {
      "@id": "http://schema.org/permissions",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).",
      "rdfs:label": "permissions"
    },
    {
      "@id": "http://schema.org/RsvpResponseYes",
      "@type": "http://schema.org/RsvpResponseType",
      "rdfs:comment": "The invitee will attend.",
      "rdfs:label": "RsvpResponseYes"
    },
    {
      "@id": "http://schema.org/provider",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ParcelDelivery"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Reservation"
        },
        {
          "@id": "http://schema.org/Invoice"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Trip"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.",
      "rdfs:label": "provider"
    },
    {
      "@id": "http://schema.org/DeliveryChargeSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "The price for the delivery of an offer using a particular delivery method.",
      "rdfs:label": "DeliveryChargeSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PriceSpecification"
      }
    },
    {
      "@id": "http://schema.org/screenCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MovieTheater"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The number of screens in the movie theater.",
      "rdfs:label": "screenCount"
    },
    {
      "@id": "http://schema.org/openingHoursSpecification",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/OpeningHoursSpecification"
      },
      "rdfs:comment": "The opening hours of a certain place.",
      "rdfs:label": "openingHoursSpecification"
    },
    {
      "@id": "http://schema.org/occupancy",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/SingleFamilyResidence"
        },
        {
          "@id": "http://schema.org/HotelRoom"
        },
        {
          "@id": "http://schema.org/Apartment"
        },
        {
          "@id": "http://schema.org/Suite"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).\nTypical unit code(s): C62 for person",
      "rdfs:label": "occupancy"
    },
    {
      "@id": "http://schema.org/saturatedFatContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of grams of saturated fat.",
      "rdfs:label": "saturatedFatContent"
    },
    {
      "@id": "http://schema.org/LendAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/BorrowAction\">BorrowAction</a>: Reciprocal of LendAction.</li>\n</ul>\n",
      "rdfs:label": "LendAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TransferAction"
      }
    },
    {
      "@id": "http://schema.org/availabilityStarts",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
        },
        {
          "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
        }
      ],
      "http://schema.org/category": "issue-1741",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ActionAccessSpecification"
        },
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The beginning of the availability of the product or service included in the offer.",
      "rdfs:label": "availabilityStarts"
    },
    {
      "@id": "http://schema.org/FoodEstablishment",
      "@type": "rdfs:Class",
      "rdfs:comment": "A food-related business.",
      "rdfs:label": "FoodEstablishment",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/encoding",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/encodesCreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "rdfs:comment": "A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.",
      "rdfs:label": "encoding"
    },
    {
      "@id": "http://schema.org/interactivityType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.",
      "rdfs:label": "interactivityType"
    },
    {
      "@id": "http://schema.org/ListenAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of consuming audio content.",
      "rdfs:label": "ListenAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ConsumeAction"
      }
    },
    {
      "@id": "http://schema.org/TransferAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.",
      "rdfs:label": "TransferAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/SoundtrackAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "SoundtrackAlbum.",
      "rdfs:label": "SoundtrackAlbum"
    },
    {
      "@id": "http://schema.org/NutritionInformation",
      "@type": "rdfs:Class",
      "rdfs:comment": "Nutritional information about the recipe.",
      "rdfs:label": "NutritionInformation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/benefits",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/jobBenefits"
      },
      "rdfs:comment": "Description of benefits associated with the job.",
      "rdfs:label": "benefits"
    },
    {
      "@id": "http://schema.org/SiteNavigationElement",
      "@type": "rdfs:Class",
      "rdfs:comment": "A navigation element of the page.",
      "rdfs:label": "SiteNavigationElement",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPageElement"
      }
    },
    {
      "@id": "http://schema.org/albums",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicGroup"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicAlbum"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/album"
      },
      "rdfs:comment": "A collection of music albums.",
      "rdfs:label": "albums"
    },
    {
      "@id": "http://schema.org/authenticator",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
      },
      "http://schema.org/category": "issue-1741",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaSubscription"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media.",
      "rdfs:label": "authenticator"
    },
    {
      "@id": "http://schema.org/gamePlatform",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/VideoGame"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Thing"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "The electronic systems used to play <a href=\"http://en.wikipedia.org/wiki/Category:Video_game_platforms\">video games</a>.",
      "rdfs:label": "gamePlatform"
    },
    {
      "@id": "http://schema.org/orderItemStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OrderItem"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/OrderStatus"
      },
      "rdfs:comment": "The current status of the order item.",
      "rdfs:label": "orderItemStatus"
    },
    {
      "@id": "http://schema.org/Organization",
      "@type": "rdfs:Class",
      "rdfs:comment": "An organization such as a school, NGO, corporation, club, etc.",
      "rdfs:label": "Organization",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Thing"
      }
    },
    {
      "@id": "http://schema.org/programMembershipUsed",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ProgramMembership"
      },
      "rdfs:comment": "Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.",
      "rdfs:label": "programMembershipUsed"
    },
    {
      "@id": "http://schema.org/DeleteAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of editing a recipient by removing one of its objects.",
      "rdfs:label": "DeleteAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UpdateAction"
      }
    },
    {
      "@id": "http://schema.org/Wednesday",
      "@type": "http://schema.org/DayOfWeek",
      "http://schema.org/sameAs": {
        "@id": "http://www.wikidata.org/entity/Q128"
      },
      "rdfs:comment": "The day of the week between Tuesday and Thursday.",
      "rdfs:label": "Wednesday"
    },
    {
      "@id": "http://schema.org/trackingUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "Tracking url for the parcel delivery.",
      "rdfs:label": "trackingUrl"
    },
    {
      "@id": "http://schema.org/RefurbishedCondition",
      "@type": "http://schema.org/OfferItemCondition",
      "rdfs:comment": "Indicates that the item is refurbished.",
      "rdfs:label": "RefurbishedCondition"
    },
    {
      "@id": "http://schema.org/bookEdition",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Book"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The edition of the book.",
      "rdfs:label": "bookEdition"
    },
    {
      "@id": "http://schema.org/TradeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.",
      "rdfs:label": "TradeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/processorRequirements",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Processor architecture required to run the application (e.g. IA64).",
      "rdfs:label": "processorRequirements"
    },
    {
      "@id": "http://schema.org/LegalService",
      "@type": "rdfs:Class",
      "rdfs:comment": "A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.<br/><br/>\n\nAs a <a class=\"localLink\" href=\"http://schema.org/LocalBusiness\">LocalBusiness</a> it can be described as a <a class=\"localLink\" href=\"http://schema.org/provider\">provider</a> of one or more <a class=\"localLink\" href=\"http://schema.org/Service\">Service</a>(s).",
      "rdfs:label": "LegalService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/grantee",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DigitalDocumentPermission"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        },
        {
          "@id": "http://schema.org/Audience"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "The person, organization, contact point, or audience that has been granted this permission.",
      "rdfs:label": "grantee"
    },
    {
      "@id": "http://schema.org/percentile10",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QuantitativeValueDistribution"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The 10th percentile value.",
      "rdfs:label": "percentile10"
    },
    {
      "@id": "http://schema.org/RemixAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "RemixAlbum.",
      "rdfs:label": "RemixAlbum"
    },
    {
      "@id": "http://schema.org/membershipNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ProgramMembership"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A unique identifier for the membership.",
      "rdfs:label": "membershipNumber"
    },
    {
      "@id": "http://schema.org/OrderProcessing",
      "@type": "http://schema.org/OrderStatus",
      "rdfs:comment": "OrderStatus representing that an order is being processed.",
      "rdfs:label": "OrderProcessing"
    },
    {
      "@id": "http://schema.org/VisualArtwork",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_VisualArtworkClass"
      },
      "rdfs:comment": "A work of art that is primarily visual in character.",
      "rdfs:label": "VisualArtwork",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/recipeYield",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The quantity produced by the recipe (for example, number of people served, number of servings, etc).",
      "rdfs:label": "recipeYield",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/yield"
      }
    },
    {
      "@id": "http://schema.org/gameServer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VideoGame"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/game"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/GameServer"
      },
      "rdfs:comment": "The server on which  it is possible to play the game.",
      "rdfs:label": "gameServer"
    },
    {
      "@id": "http://schema.org/arrivalPlatform",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TrainTrip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The platform where the train arrives.",
      "rdfs:label": "arrivalPlatform"
    },
    {
      "@id": "http://schema.org/Attorney",
      "@type": "rdfs:Class",
      "rdfs:comment": "Professional service: Attorney. <br/><br/>\n\nThis type is deprecated - <a class=\"localLink\" href=\"http://schema.org/LegalService\">LegalService</a> is more inclusive and less ambiguous.",
      "rdfs:label": "Attorney",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LegalService"
      }
    },
    {
      "@id": "http://schema.org/RsvpAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of notifying an event organizer as to whether you expect to attend the event.",
      "rdfs:label": "RsvpAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InformAction"
      }
    },
    {
      "@id": "http://schema.org/url",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "URL of the item.",
      "rdfs:label": "url"
    },
    {
      "@id": "http://schema.org/Rating",
      "@type": "rdfs:Class",
      "rdfs:comment": "A rating is an evaluation on a numeric scale, such as 1 to 5 stars.",
      "rdfs:label": "Rating",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/bed",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HotelRoom"
        },
        {
          "@id": "http://schema.org/Suite"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/BedDetails"
        },
        {
          "@id": "http://schema.org/BedType"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.\n      If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.",
      "rdfs:label": "bed"
    },
    {
      "@id": "http://schema.org/bookFormat",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Book"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BookFormatType"
      },
      "rdfs:comment": "The format of the book.",
      "rdfs:label": "bookFormat"
    },
    {
      "@id": "http://schema.org/Time",
      "@type": [
        "http://schema.org/DataType",
        "rdfs:Class"
      ],
      "rdfs:comment": "A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see <a href=\"http://www.w3.org/TR/xmlschema-2/#time\">XML schema for details</a>).",
      "rdfs:label": "Time"
    },
    {
      "@id": "http://schema.org/availableDeliveryMethod",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DeliveryMethod"
      },
      "rdfs:comment": "The delivery method(s) available for this offer.",
      "rdfs:label": "availableDeliveryMethod"
    },
    {
      "@id": "http://schema.org/VegetarianDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet exclusive of animal meat.",
      "rdfs:label": "VegetarianDiet"
    },
    {
      "@id": "http://schema.org/KosherDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet conforming to Jewish dietary practices.",
      "rdfs:label": "KosherDiet"
    },
    {
      "@id": "http://schema.org/maps",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/hasMap"
      },
      "rdfs:comment": "A URL to a map of the place.",
      "rdfs:label": "maps"
    },
    {
      "@id": "http://schema.org/ApartmentComplex",
      "@type": "rdfs:Class",
      "rdfs:comment": "Residence type: Apartment complex.",
      "rdfs:label": "ApartmentComplex",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Residence"
      }
    },
    {
      "@id": "http://schema.org/RegisterAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of registering to be a user of a service, product or web page.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/JoinAction\">JoinAction</a>: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, <em>not</em> a group/team of people.</li>\n<li>[FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/SubscribeAction\">SubscribeAction</a>: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.</li>\n</ul>\n",
      "rdfs:label": "RegisterAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/HousePainter",
      "@type": "rdfs:Class",
      "rdfs:comment": "A house painting service.",
      "rdfs:label": "HousePainter",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HomeAndConstructionBusiness"
      }
    },
    {
      "@id": "http://schema.org/WinAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of achieving victory in a competitive activity.",
      "rdfs:label": "WinAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AchieveAction"
      }
    },
    {
      "@id": "http://schema.org/MovieRentalStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A movie rental store.",
      "rdfs:label": "MovieRentalStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/WatchAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of consuming dynamic/moving visual content.",
      "rdfs:label": "WatchAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ConsumeAction"
      }
    },
    {
      "@id": "http://schema.org/workFeatured",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "A work featured in some event, e.g. exhibited in an ExhibitionEvent.\n       Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).",
      "rdfs:label": "workFeatured"
    },
    {
      "@id": "http://schema.org/PropertyValueSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass"
      },
      "rdfs:comment": "A Property value specification.",
      "rdfs:label": "PropertyValueSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/EducationEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Education event.",
      "rdfs:label": "EducationEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/serviceAudience",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Service"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Audience"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/audience"
      },
      "rdfs:comment": "The audience eligible for this service.",
      "rdfs:label": "serviceAudience"
    },
    {
      "@id": "http://schema.org/recipeCategory",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The category of the recipe—for example, appetizer, entree, etc.",
      "rdfs:label": "recipeCategory"
    },
    {
      "@id": "http://schema.org/fatContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of grams of fat.",
      "rdfs:label": "fatContent"
    },
    {
      "@id": "http://schema.org/character",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "Fictional person connected with a creative work.",
      "rdfs:label": "character"
    },
    {
      "@id": "http://schema.org/ResumeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).",
      "rdfs:label": "ResumeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ControlAction"
      }
    },
    {
      "@id": "http://schema.org/ToyStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A toy store.",
      "rdfs:label": "ToyStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/BedAndBreakfast",
      "@type": "rdfs:Class",
      "rdfs:comment": "Bed and breakfast.\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "BedAndBreakfast",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LodgingBusiness"
      }
    },
    {
      "@id": "http://schema.org/Sunday",
      "@type": "http://schema.org/DayOfWeek",
      "http://schema.org/sameAs": {
        "@id": "http://www.wikidata.org/entity/Q132"
      },
      "rdfs:comment": "The day of the week between Saturday and Monday.",
      "rdfs:label": "Sunday"
    },
    {
      "@id": "http://schema.org/Suite",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href=\"http://en.wikipedia.org/wiki/Suite_(hotel)\">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "Suite",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Accommodation"
      }
    },
    {
      "@id": "http://schema.org/areaServed",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        },
        {
          "@id": "http://schema.org/DeliveryChargeSpecification"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/AdministrativeArea"
        },
        {
          "@id": "http://schema.org/GeoShape"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The geographic area where a service or offered item is provided.",
      "rdfs:label": "areaServed"
    },
    {
      "@id": "http://schema.org/postOfficeBoxNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PostalAddress"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The post office box number for PO box addresses.",
      "rdfs:label": "postOfficeBoxNumber"
    },
    {
      "@id": "http://schema.org/audience",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/LodgingBusiness"
        },
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/PlayAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Audience"
      },
      "rdfs:comment": "An intended audience, i.e. a group for whom something was created.",
      "rdfs:label": "audience"
    },
    {
      "@id": "http://schema.org/awayTeam",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SportsEvent"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/SportsTeam"
        }
      ],
      "rdfs:comment": "The away team in a sports event.",
      "rdfs:label": "awayTeam",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/competitor"
      }
    },
    {
      "@id": "http://schema.org/GenderType",
      "@type": "rdfs:Class",
      "rdfs:comment": "An enumeration of genders.",
      "rdfs:label": "GenderType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/InstallAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of installing an application.",
      "rdfs:label": "InstallAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ConsumeAction"
      }
    },
    {
      "@id": "http://schema.org/EventVenue",
      "@type": "rdfs:Class",
      "rdfs:comment": "An event venue.",
      "rdfs:label": "EventVenue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/providesService",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ServiceChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Service"
      },
      "rdfs:comment": "The service provided by this channel.",
      "rdfs:label": "providesService"
    },
    {
      "@id": "http://schema.org/GiveAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/TakeAction\">TakeAction</a>: Reciprocal of GiveAction.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/SendAction\">SendAction</a>: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).</li>\n</ul>\n",
      "rdfs:label": "GiveAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TransferAction"
      }
    },
    {
      "@id": "http://schema.org/instructor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CourseInstance"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A person assigned to instruct or provide instructional assistance for the <a class=\"localLink\" href=\"http://schema.org/CourseInstance\">CourseInstance</a>.",
      "rdfs:label": "instructor"
    },
    {
      "@id": "http://schema.org/sourceOrganization",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The Organization on whose behalf the creator was working.",
      "rdfs:label": "sourceOrganization"
    },
    {
      "@id": "http://schema.org/remainingAttendeeCapacity",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of attendee places for an event that remain unallocated.",
      "rdfs:label": "remainingAttendeeCapacity"
    },
    {
      "@id": "http://schema.org/mpn",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.",
      "rdfs:label": "mpn"
    },
    {
      "@id": "http://schema.org/OutOfStock",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item is out of stock.",
      "rdfs:label": "OutOfStock"
    },
    {
      "@id": "http://schema.org/OrderPickupAvailable",
      "@type": "http://schema.org/OrderStatus",
      "rdfs:comment": "OrderStatus representing availability of an order for pickup.",
      "rdfs:label": "OrderPickupAvailable"
    },
    {
      "@id": "http://schema.org/BuyAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.",
      "rdfs:label": "BuyAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/PostOffice",
      "@type": "rdfs:Class",
      "rdfs:comment": "A post office.",
      "rdfs:label": "PostOffice",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/GovernmentOffice"
      }
    },
    {
      "@id": "http://schema.org/CheckoutPage",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web page type: Checkout page.",
      "rdfs:label": "CheckoutPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/Accommodation",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.\nFor more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "Accommodation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Place"
      }
    },
    {
      "@id": "http://schema.org/isPartOf",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/hasPart"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.",
      "rdfs:label": "isPartOf"
    },
    {
      "@id": "http://schema.org/cargoVolume",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.<br/><br/>\n\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet<br/><br/>\n\nNote: You can use <a class=\"localLink\" href=\"http://schema.org/minValue\">minValue</a> and <a class=\"localLink\" href=\"http://schema.org/maxValue\">maxValue</a> to indicate ranges.",
      "rdfs:label": "cargoVolume"
    },
    {
      "@id": "http://schema.org/actor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/VideoObject"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/Movie"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/VideoGame"
        },
        {
          "@id": "http://schema.org/Clip"
        },
        {
          "@id": "http://schema.org/Episode"
        },
        {
          "@id": "http://schema.org/MovieSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.",
      "rdfs:label": "actor"
    },
    {
      "@id": "http://schema.org/defaultValue",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Thing"
        }
      ],
      "rdfs:comment": "The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.",
      "rdfs:label": "defaultValue"
    },
    {
      "@id": "http://schema.org/DiabeticDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet appropriate for people with diabetes.",
      "rdfs:label": "DiabeticDiet"
    },
    {
      "@id": "http://schema.org/LiveAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "LiveAlbum.",
      "rdfs:label": "LiveAlbum"
    },
    {
      "@id": "http://schema.org/beforeMedia",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/HowToDirection"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/MediaObject"
        }
      ],
      "rdfs:comment": "A media object representing the circumstances before performing this direction.",
      "rdfs:label": "beforeMedia"
    },
    {
      "@id": "http://schema.org/PerformingArtsTheater",
      "@type": "rdfs:Class",
      "rdfs:comment": "A theater or other performing art center.",
      "rdfs:label": "PerformingArtsTheater",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/AggregateOffer",
      "@type": "rdfs:Class",
      "rdfs:comment": "When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.",
      "rdfs:label": "AggregateOffer",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Offer"
      }
    },
    {
      "@id": "http://schema.org/actionOption",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ChooseAction"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Thing"
        }
      ],
      "rdfs:comment": "A sub property of object. The options subject to this action.",
      "rdfs:label": "actionOption",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/Review",
      "@type": "rdfs:Class",
      "rdfs:comment": "A review of an item - for example, of a restaurant, movie, or store.",
      "rdfs:label": "Review",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/height",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MediaObject"
        },
        {
          "@id": "http://schema.org/VisualArtwork"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Distance"
        }
      ],
      "rdfs:comment": "The height of the item.",
      "rdfs:label": "height"
    },
    {
      "@id": "http://schema.org/PotentialActionStatus",
      "@type": "http://schema.org/ActionStatusType",
      "rdfs:comment": "A description of an action that is supported.",
      "rdfs:label": "PotentialActionStatus"
    },
    {
      "@id": "http://schema.org/HowToSupply",
      "@type": "rdfs:Class",
      "rdfs:comment": "A supply consumed when performing the instructions for how to achieve a result.",
      "rdfs:label": "HowToSupply",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HowToItem"
      }
    },
    {
      "@id": "http://schema.org/deliveryAddress",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PostalAddress"
      },
      "rdfs:comment": "Destination address.",
      "rdfs:label": "deliveryAddress"
    },
    {
      "@id": "http://schema.org/performers",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/performer"
      },
      "rdfs:comment": "The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.",
      "rdfs:label": "performers"
    },
    {
      "@id": "http://schema.org/serialNumber",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/IndividualProduct"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.",
      "rdfs:label": "serialNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/trackingNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Shipper tracking number.",
      "rdfs:label": "trackingNumber"
    },
    {
      "@id": "http://schema.org/AutoRepair",
      "@type": "rdfs:Class",
      "rdfs:comment": "Car repair business.",
      "rdfs:label": "AutoRepair",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AutomotiveBusiness"
      }
    },
    {
      "@id": "http://schema.org/broadcastTimezone",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The timezone in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 format</a> for which the service bases its broadcasts",
      "rdfs:label": "broadcastTimezone"
    },
    {
      "@id": "http://schema.org/ExerciseGym",
      "@type": "rdfs:Class",
      "rdfs:comment": "A gym.",
      "rdfs:label": "ExerciseGym",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SportsActivityLocation"
      }
    },
    {
      "@id": "http://schema.org/Embassy",
      "@type": "rdfs:Class",
      "rdfs:comment": "An embassy.",
      "rdfs:label": "Embassy",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/GovernmentBuilding"
      }
    },
    {
      "@id": "http://schema.org/RsvpResponseNo",
      "@type": "http://schema.org/RsvpResponseType",
      "rdfs:comment": "The invitee will not attend.",
      "rdfs:label": "RsvpResponseNo"
    },
    {
      "@id": "http://schema.org/ProfilePage",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web page type: Profile page.",
      "rdfs:label": "ProfilePage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/DisagreeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants.",
      "rdfs:label": "DisagreeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ReactAction"
      }
    },
    {
      "@id": "http://schema.org/DigitalDocumentPermission",
      "@type": "rdfs:Class",
      "rdfs:comment": "A permission for a particular person or group to access a particular file.",
      "rdfs:label": "DigitalDocumentPermission",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/childMaxAge",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParentAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "Maximal age of the child.",
      "rdfs:label": "childMaxAge"
    },
    {
      "@id": "http://schema.org/includedInDataCatalog",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Dataset"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/dataset"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DataCatalog"
      },
      "rdfs:comment": "A data catalog which contains this dataset.",
      "rdfs:label": "includedInDataCatalog"
    },
    {
      "@id": "http://schema.org/ImageObject",
      "@type": "rdfs:Class",
      "http://www.w3.org/2002/07/owl#equivalentClass": {
        "@id": "http://purl.org/dc/dcmitype/Image"
      },
      "rdfs:comment": "An image file.",
      "rdfs:label": "ImageObject",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MediaObject"
      }
    },
    {
      "@id": "http://schema.org/workLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        }
      ],
      "rdfs:comment": "A contact location for a person's place of work.",
      "rdfs:label": "workLocation",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/ReservationPackage",
      "@type": "rdfs:Class",
      "rdfs:comment": "A group of multiple reservations with common values for all sub-reservations.",
      "rdfs:label": "ReservationPackage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/FinancialProduct",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.",
      "rdfs:label": "FinancialProduct",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Service"
      }
    },
    {
      "@id": "http://schema.org/lyrics",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "The words in the song.",
      "rdfs:label": "lyrics"
    },
    {
      "@id": "http://schema.org/coverageStartTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LiveBlogPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins.",
      "rdfs:label": "coverageStartTime"
    },
    {
      "@id": "http://schema.org/HomeAndConstructionBusiness",
      "@type": "rdfs:Class",
      "rdfs:comment": "A construction business.<br/><br/>\n\nA HomeAndConstructionBusiness is a <a class=\"localLink\" href=\"http://schema.org/LocalBusiness\">LocalBusiness</a> that provides services around homes and buildings.<br/><br/>\n\nAs a <a class=\"localLink\" href=\"http://schema.org/LocalBusiness\">LocalBusiness</a> it can be described as a <a class=\"localLink\" href=\"http://schema.org/provider\">provider</a> of one or more <a class=\"localLink\" href=\"http://schema.org/Service\">Service</a>(s).",
      "rdfs:label": "HomeAndConstructionBusiness",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/ProgramMembership",
      "@type": "rdfs:Class",
      "rdfs:comment": "Used to describe membership in a loyalty programs (e.g. \"StarAliance\"), traveler clubs (e.g. \"AAA\"), purchase clubs (\"Safeway Club\"), etc.",
      "rdfs:label": "ProgramMembership",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/ControlAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent controls a device or application.",
      "rdfs:label": "ControlAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/CheckAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.",
      "rdfs:label": "CheckAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FindAction"
      }
    },
    {
      "@id": "http://schema.org/busName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BusTrip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The name of the bus (e.g. Bolt Express).",
      "rdfs:label": "busName"
    },
    {
      "@id": "http://schema.org/vehicleInteriorColor",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The color or color combination of the interior of the vehicle.",
      "rdfs:label": "vehicleInteriorColor"
    },
    {
      "@id": "http://schema.org/browserRequirements",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'.",
      "rdfs:label": "browserRequirements"
    },
    {
      "@id": "http://schema.org/floorSize",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Accommodation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The size of the accommodation, e.g. in square meter or squarefoot.\nTypical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard",
      "rdfs:label": "floorSize"
    },
    {
      "@id": "http://schema.org/Game",
      "@type": "rdfs:Class",
      "rdfs:comment": "The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.",
      "rdfs:label": "Game",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/EPRelease",
      "@type": "http://schema.org/MusicAlbumReleaseType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "EPRelease.",
      "rdfs:label": "EPRelease"
    },
    {
      "@id": "http://schema.org/BroadcastRelease",
      "@type": "http://schema.org/MusicAlbumReleaseType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "BroadcastRelease.",
      "rdfs:label": "BroadcastRelease"
    },
    {
      "@id": "http://schema.org/departureBusStop",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BusTrip"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/BusStation"
        },
        {
          "@id": "http://schema.org/BusStop"
        }
      ],
      "rdfs:comment": "The stop or station from which the bus departs.",
      "rdfs:label": "departureBusStop"
    },
    {
      "@id": "http://schema.org/DiscussionForumPosting",
      "@type": "rdfs:Class",
      "rdfs:comment": "A posting to a discussion forum.",
      "rdfs:label": "DiscussionForumPosting",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SocialMediaPosting"
      }
    },
    {
      "@id": "http://schema.org/bitrate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The bitrate of the media object.",
      "rdfs:label": "bitrate"
    },
    {
      "@id": "http://schema.org/IceCreamShop",
      "@type": "rdfs:Class",
      "rdfs:comment": "An ice cream shop.",
      "rdfs:label": "IceCreamShop",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/TouristAttraction",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it"
        },
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism"
        }
      ],
      "rdfs:comment": "A tourist attraction.  In principle any Thing can be a <a class=\"localLink\" href=\"http://schema.org/TouristAttraction\">TouristAttraction</a>, from a <a class=\"localLink\" href=\"http://schema.org/Mountain\">Mountain</a> and <a class=\"localLink\" href=\"http://schema.org/LandmarksOrHistoricalBuildings\">LandmarksOrHistoricalBuildings</a> to a <a class=\"localLink\" href=\"http://schema.org/LocalBusiness\">LocalBusiness</a>.  This Type can be used on its own to describe a general <a class=\"localLink\" href=\"http://schema.org/TouristAttraction\">TouristAttraction</a>, or be used as an <a class=\"localLink\" href=\"http://schema.org/additionalType\">additionalType</a> to add tourist attraction properties to any other type.  (See examples below)",
      "rdfs:label": "TouristAttraction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Place"
      }
    },
    {
      "@id": "http://schema.org/Car",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "A car is a wheeled, self-powered motor vehicle used for transportation.",
      "rdfs:label": "Car",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Vehicle"
      }
    },
    {
      "@id": "http://schema.org/PriceSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use <a class=\"localLink\" href=\"http://schema.org/MonetaryAmount\">MonetaryAmount</a> to describe independent amounts of money such as a salary, credit card limits, etc.",
      "rdfs:label": "PriceSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/AdministrativeArea",
      "@type": "rdfs:Class",
      "rdfs:comment": "A geographical region, typically under the jurisdiction of a particular government.",
      "rdfs:label": "AdministrativeArea",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Place"
      }
    },
    {
      "@id": "http://schema.org/videoFormat",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/BroadcastEvent"
        },
        {
          "@id": "http://schema.org/BroadcastService"
        },
        {
          "@id": "http://schema.org/ScreeningEvent"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).",
      "rdfs:label": "videoFormat"
    },
    {
      "@id": "http://schema.org/Season",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/CreativeWorkSeason"
      },
      "rdfs:comment": "A media season e.g. tv, radio, video game etc.",
      "rdfs:label": "Season",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/ineligibleRegion",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/DeliveryChargeSpecification"
        },
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/GeoShape"
        }
      ],
      "rdfs:comment": "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.<br/><br/>\n\nSee also <a class=\"localLink\" href=\"http://schema.org/eligibleRegion\">eligibleRegion</a>.",
      "rdfs:label": "ineligibleRegion"
    },
    {
      "@id": "http://schema.org/servesCuisine",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FoodEstablishment"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The cuisine of the restaurant.",
      "rdfs:label": "servesCuisine"
    },
    {
      "@id": "http://schema.org/DrawAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.",
      "rdfs:label": "DrawAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreateAction"
      }
    },
    {
      "@id": "http://schema.org/paymentDue",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Invoice"
        },
        {
          "@id": "http://schema.org/Order"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/paymentDueDate"
      },
      "rdfs:comment": "The date that payment is due.",
      "rdfs:label": "paymentDue"
    },
    {
      "@id": "http://schema.org/PaymentCard",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A payment method using a credit, debit, store or other card to associate the payment with an account.",
      "rdfs:label": "PaymentCard",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/PaymentMethod"
        },
        {
          "@id": "http://schema.org/FinancialProduct"
        }
      ]
    },
    {
      "@id": "http://schema.org/numberOfEpisodes",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of episodes in this season or series.",
      "rdfs:label": "numberOfEpisodes"
    },
    {
      "@id": "http://schema.org/PublicationVolume",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "rdfs:comment": "A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.<br/><br/>\n\n<pre><code>  &lt;br/&gt;&lt;br/&gt;See also &lt;a href=\"http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html\"&gt;blog post&lt;/a&gt;.\n</code></pre>\n",
      "rdfs:label": "PublicationVolume",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/LocalBusiness",
      "@type": "rdfs:Class",
      "http://www.w3.org/2004/02/skos/core#closeMatch": {
        "@id": "http://www.w3.org/ns/regorg#RegisteredOrganization"
      },
      "rdfs:comment": "A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.",
      "rdfs:label": "LocalBusiness",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ]
    },
    {
      "@id": "http://schema.org/requiresSubscription",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
      },
      "http://schema.org/category": "issue-1741",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ActionAccessSpecification"
        },
        {
          "@id": "http://schema.org/MediaObject"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MediaSubscription"
        },
        {
          "@id": "http://schema.org/Boolean"
        }
      ],
      "rdfs:comment": "Indicates if use of the media require a subscription  (either paid or free). Allowed values are <code>true</code> or <code>false</code> (note that an earlier version had 'yes', 'no').",
      "rdfs:label": "requiresSubscription"
    },
    {
      "@id": "http://schema.org/CancelAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of asserting that a future event/action is no longer going to happen.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/ConfirmAction\">ConfirmAction</a>: The antonym of CancelAction.</li>\n</ul>\n",
      "rdfs:label": "CancelAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlanAction"
      }
    },
    {
      "@id": "http://schema.org/RsvpResponseMaybe",
      "@type": "http://schema.org/RsvpResponseType",
      "rdfs:comment": "The invitee may or may not attend.",
      "rdfs:label": "RsvpResponseMaybe"
    },
    {
      "@id": "http://schema.org/faxNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The fax number.",
      "rdfs:label": "faxNumber"
    },
    {
      "@id": "http://schema.org/actionApplication",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EntryPoint"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "rdfs:comment": "An application that can complete the request.",
      "rdfs:label": "actionApplication"
    },
    {
      "@id": "http://schema.org/trailer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MovieSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/VideoGame"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/Movie"
        },
        {
          "@id": "http://schema.org/Episode"
        },
        {
          "@id": "http://schema.org/TVSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/VideoObject"
      },
      "rdfs:comment": "The trailer of a movie or tv/radio series, season, episode, etc.",
      "rdfs:label": "trailer"
    },
    {
      "@id": "http://schema.org/IgnoreAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of intentionally disregarding the object. An agent ignores an object.",
      "rdfs:label": "IgnoreAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AssessAction"
      }
    },
    {
      "@id": "http://schema.org/steeringPosition",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/SteeringPositionValue"
      },
      "rdfs:comment": "The position of the steering wheel or similar device (mostly for cars).",
      "rdfs:label": "steeringPosition"
    },
    {
      "@id": "http://schema.org/MusicRecording",
      "@type": "rdfs:Class",
      "rdfs:comment": "A music recording (track), usually a single song.",
      "rdfs:label": "MusicRecording",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/arrivalGate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Identifier of the flight's arrival gate.",
      "rdfs:label": "arrivalGate"
    },
    {
      "@id": "http://schema.org/loanTerm",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LoanOrCredit"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The duration of the loan or credit agreement.",
      "rdfs:label": "loanTerm",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/duration"
      }
    },
    {
      "@id": "http://schema.org/target",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Action"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/EntryPoint"
      },
      "rdfs:comment": "Indicates a target EntryPoint for an Action.",
      "rdfs:label": "target"
    },
    {
      "@id": "http://schema.org/includedComposition",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "rdfs:comment": "Smaller compositions included in this work (e.g. a movement in a symphony).",
      "rdfs:label": "includedComposition"
    },
    {
      "@id": "http://schema.org/line",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GeoShape"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.",
      "rdfs:label": "line"
    },
    {
      "@id": "http://schema.org/minPrice",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PriceSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The lowest price if the price is a range.",
      "rdfs:label": "minPrice"
    },
    {
      "@id": "http://schema.org/MotorcycleDealer",
      "@type": "rdfs:Class",
      "rdfs:comment": "A motorcycle dealer.",
      "rdfs:label": "MotorcycleDealer",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AutomotiveBusiness"
      }
    },
    {
      "@id": "http://schema.org/regionsAllowed",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in <a href=\"http://en.wikipedia.org/wiki/ISO_3166\">ISO 3166 format</a>.",
      "rdfs:label": "regionsAllowed"
    },
    {
      "@id": "http://schema.org/CheckOutAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/CheckInAction\">CheckInAction</a>: The antonym of CheckOutAction.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/DepartAction\">DepartAction</a>: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/CancelAction\">CancelAction</a>: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.</li>\n</ul>\n",
      "rdfs:label": "CheckOutAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CommunicateAction"
      }
    },
    {
      "@id": "http://schema.org/priceRange",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LocalBusiness"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The price range of the business, for example <code>$$$</code>.",
      "rdfs:label": "priceRange"
    },
    {
      "@id": "http://schema.org/BankAccount",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.",
      "rdfs:label": "BankAccount",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialProduct"
      }
    },
    {
      "@id": "http://schema.org/Duration",
      "@type": "rdfs:Class",
      "rdfs:comment": "Quantity: Duration (use <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>).",
      "rdfs:label": "Duration",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Quantity"
      }
    },
    {
      "@id": "http://schema.org/RealEstateAgent",
      "@type": "rdfs:Class",
      "rdfs:comment": "A real-estate agent.",
      "rdfs:label": "RealEstateAgent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/children",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A child of the person.",
      "rdfs:label": "children"
    },
    {
      "@id": "http://schema.org/MapCategoryType",
      "@type": "rdfs:Class",
      "rdfs:comment": "An enumeration of several kinds of Map.",
      "rdfs:label": "MapCategoryType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/SportsOrganization",
      "@type": "rdfs:Class",
      "rdfs:comment": "Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.",
      "rdfs:label": "SportsOrganization",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/EndorseAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent approves/certifies/likes/supports/sanction an object.",
      "rdfs:label": "EndorseAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ReactAction"
      }
    },
    {
      "@id": "http://schema.org/EducationalOrganization",
      "@type": "rdfs:Class",
      "rdfs:comment": "An educational organization.",
      "rdfs:label": "EducationalOrganization",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/orderNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The identifier of the transaction.",
      "rdfs:label": "orderNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/gtin8",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The <a href=\"http://apps.gs1.org/GDD/glossary/Pages/GTIN-8.aspx\">GTIN-8</a> code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details.",
      "rdfs:label": "gtin8",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/image",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/ImageObject"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "An image of the item. This can be a <a class=\"localLink\" href=\"http://schema.org/URL\">URL</a> or a fully described <a class=\"localLink\" href=\"http://schema.org/ImageObject\">ImageObject</a>.",
      "rdfs:label": "image"
    },
    {
      "@id": "http://schema.org/CableOrSatelliteService",
      "@type": "rdfs:Class",
      "rdfs:comment": "A service which provides access to media programming like TV or radio. Access may be via cable or satellite.",
      "rdfs:label": "CableOrSatelliteService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Service"
      }
    },
    {
      "@id": "http://schema.org/endDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/Role"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeries"
        },
        {
          "@id": "http://schema.org/DatedMoneySpecification"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/DateTime"
        },
        {
          "@id": "http://schema.org/Date"
        }
      ],
      "rdfs:comment": "The end date and time of the item (in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>).",
      "rdfs:label": "endDate"
    },
    {
      "@id": "http://schema.org/CurrencyConversionService",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A service to convert funds from one currency to another currency.",
      "rdfs:label": "CurrencyConversionService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialProduct"
      }
    },
    {
      "@id": "http://schema.org/HinduTemple",
      "@type": "rdfs:Class",
      "rdfs:comment": "A Hindu temple.",
      "rdfs:label": "HinduTemple",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlaceOfWorship"
      }
    },
    {
      "@id": "http://schema.org/TVSeason",
      "@type": "rdfs:Class",
      "rdfs:comment": "Season dedicated to TV broadcast and associated online delivery.",
      "rdfs:label": "TVSeason",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        }
      ]
    },
    {
      "@id": "http://schema.org/SearchResultsPage",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web page type: Search results page.",
      "rdfs:label": "SearchResultsPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/UserBlocks",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserBlocks",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/hasDeliveryMethod",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/DeliveryEvent"
        },
        {
          "@id": "http://schema.org/ParcelDelivery"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DeliveryMethod"
      },
      "rdfs:comment": "Method used for delivery or shipping.",
      "rdfs:label": "hasDeliveryMethod"
    },
    {
      "@id": "http://schema.org/DanceEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: A social dance.",
      "rdfs:label": "DanceEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/numTracks",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicPlaylist"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of tracks in this album or playlist.",
      "rdfs:label": "numTracks"
    },
    {
      "@id": "http://schema.org/season",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWorkSeason"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/containsSeason"
      },
      "rdfs:comment": "A season in a media series.",
      "rdfs:label": "season",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/hasPart"
      }
    },
    {
      "@id": "http://schema.org/itemListElement",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ItemList"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Thing"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/ListItem"
        }
      ],
      "rdfs:comment": "For itemListElement values, you can use simple strings (e.g. \"Peter\", \"Paul\", \"Mary\"), existing entities, or use ListItem.<br/><br/>\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.<br/><br/>\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.",
      "rdfs:label": "itemListElement"
    },
    {
      "@id": "http://schema.org/paymentUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "The URL for sending a payment.",
      "rdfs:label": "paymentUrl"
    },
    {
      "@id": "http://schema.org/greater",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "rdfs:comment": "This ordering relation for qualitative values indicates that the subject is greater than the object.",
      "rdfs:label": "greater"
    },
    {
      "@id": "http://schema.org/blogPosts",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Blog"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BlogPosting"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/blogPost"
      },
      "rdfs:comment": "The postings that are part of this blog.",
      "rdfs:label": "blogPosts"
    },
    {
      "@id": "http://schema.org/artMedium",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VisualArtwork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)",
      "rdfs:label": "artMedium",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/material"
      }
    },
    {
      "@id": "http://schema.org/partOfEpisode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Clip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Episode"
      },
      "rdfs:comment": "The episode to which this clip belongs.",
      "rdfs:label": "partOfEpisode",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/isPartOf"
      }
    },
    {
      "@id": "http://schema.org/BookStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A bookstore.",
      "rdfs:label": "BookStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/orderStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/OrderStatus"
      },
      "rdfs:comment": "The current status of the order.",
      "rdfs:label": "orderStatus"
    },
    {
      "@id": "http://schema.org/prepTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HowToDirection"
        },
        {
          "@id": "http://schema.org/HowTo"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "The length of time it takes to prepare the items to be used in instructions or a direction, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.",
      "rdfs:label": "prepTime"
    },
    {
      "@id": "http://schema.org/recordLabel",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRelease"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/ontology/mo/label"
      },
      "rdfs:comment": "The label that issued the release.",
      "rdfs:label": "recordLabel"
    },
    {
      "@id": "http://schema.org/agent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Action"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "The direct performer or driver of the action (animate or inanimate). e.g. <em>John</em> wrote a book.",
      "rdfs:label": "agent"
    },
    {
      "@id": "http://schema.org/reservationStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ReservationStatusType"
      },
      "rdfs:comment": "The current status of the reservation.",
      "rdfs:label": "reservationStatus"
    },
    {
      "@id": "http://schema.org/namedPosition",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Role"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/roleName"
      },
      "rdfs:comment": "A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'.",
      "rdfs:label": "namedPosition"
    },
    {
      "@id": "http://schema.org/validFor",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1779"
      },
      "http://schema.org/category": "issue-1779",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/EducationalOccupationalCredential"
        },
        {
          "@id": "http://schema.org/Permit"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "The duration of validity of a permit or similar thing.",
      "rdfs:label": "validFor"
    },
    {
      "@id": "http://schema.org/EntryPoint",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass"
      },
      "rdfs:comment": "An entry point, within some Web-based protocol.",
      "rdfs:label": "EntryPoint",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/lodgingUnitDescription",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LodgingReservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A full description of the lodging unit.",
      "rdfs:label": "lodgingUnitDescription"
    },
    {
      "@id": "http://schema.org/FoodEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Food event.",
      "rdfs:label": "FoodEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/partOfSeries",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Clip"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/Episode"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWorkSeries"
      },
      "rdfs:comment": "The series to which this episode or season belongs.",
      "rdfs:label": "partOfSeries",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/isPartOf"
      }
    },
    {
      "@id": "http://schema.org/tickerSymbol",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Corporation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022.",
      "rdfs:label": "tickerSymbol"
    },
    {
      "@id": "http://schema.org/incentiveCompensation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Description of bonus and commission compensation aspects of the job.",
      "rdfs:label": "incentiveCompensation"
    },
    {
      "@id": "http://schema.org/OutletStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "An outlet store.",
      "rdfs:label": "OutletStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/reviewRating",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Review"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Rating"
      },
      "rdfs:comment": "The rating given in this review. Note that reviews can themselves be rated. The <code>reviewRating</code> applies to rating given by the review. The <a class=\"localLink\" href=\"http://schema.org/aggregateRating\">aggregateRating</a> property applies to the review itself, as a creative work.",
      "rdfs:label": "reviewRating"
    },
    {
      "@id": "http://schema.org/hasOccupation",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Occupation"
      },
      "rdfs:comment": "The Person's occupation. For past professions, use Role for expressing dates.",
      "rdfs:label": "hasOccupation"
    },
    {
      "@id": "http://schema.org/OrderAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent orders an object/product/service to be delivered/sent.",
      "rdfs:label": "OrderAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/jobTitle",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The job title of the person (for example, Financial Manager).",
      "rdfs:label": "jobTitle"
    },
    {
      "@id": "http://schema.org/propertyID",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValue"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be\n(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)\na URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).\nStandards bodies should promote a standard prefix for the identifiers of properties from their standards.",
      "rdfs:label": "propertyID"
    },
    {
      "@id": "http://schema.org/appliesToDeliveryMethod",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/PaymentChargeSpecification"
        },
        {
          "@id": "http://schema.org/DeliveryChargeSpecification"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DeliveryMethod"
      },
      "rdfs:comment": "The delivery method(s) to which the delivery charge or payment charge specification applies.",
      "rdfs:label": "appliesToDeliveryMethod"
    },
    {
      "@id": "http://schema.org/targetProduct",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareSourceCode"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "rdfs:comment": "Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.",
      "rdfs:label": "targetProduct"
    },
    {
      "@id": "http://schema.org/video",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Clip"
        },
        {
          "@id": "http://schema.org/VideoObject"
        }
      ],
      "rdfs:comment": "An embedded video object.",
      "rdfs:label": "video"
    },
    {
      "@id": "http://schema.org/InviteAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of asking someone to attend an event. Reciprocal of RsvpAction.",
      "rdfs:label": "InviteAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CommunicateAction"
      }
    },
    {
      "@id": "http://schema.org/episodes",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/TVSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Episode"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/episode"
      },
      "rdfs:comment": "An episode of a TV/radio series or season.",
      "rdfs:label": "episodes"
    },
    {
      "@id": "http://schema.org/course",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ExerciseAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/exerciseCourse"
      },
      "rdfs:comment": "A sub property of location. The course where this action was taken.",
      "rdfs:label": "course",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/doorTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The time admission will commence.",
      "rdfs:label": "doorTime"
    },
    {
      "@id": "http://schema.org/TVEpisode",
      "@type": "rdfs:Class",
      "rdfs:comment": "A TV episode which can be part of a series or season.",
      "rdfs:label": "TVEpisode",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Episode"
      }
    },
    {
      "@id": "http://schema.org/MusicGroup",
      "@type": "rdfs:Class",
      "rdfs:comment": "A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.",
      "rdfs:label": "MusicGroup",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PerformingGroup"
      }
    },
    {
      "@id": "http://schema.org/AmusementPark",
      "@type": "rdfs:Class",
      "rdfs:comment": "An amusement park.",
      "rdfs:label": "AmusementPark",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EntertainmentBusiness"
      }
    },
    {
      "@id": "http://schema.org/ContactPointOption",
      "@type": "rdfs:Class",
      "rdfs:comment": "Enumerated options related to a ContactPoint.",
      "rdfs:label": "ContactPointOption",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/subOrganization",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/parentOrganization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.",
      "rdfs:label": "subOrganization"
    },
    {
      "@id": "http://schema.org/dateRead",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Message"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date/time at which the message has been read by the recipient if a single recipient exists.",
      "rdfs:label": "dateRead"
    },
    {
      "@id": "http://schema.org/publisher",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The publisher of the creative work.",
      "rdfs:label": "publisher"
    },
    {
      "@id": "http://schema.org/billingIncrement",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UnitPriceSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.",
      "rdfs:label": "billingIncrement"
    },
    {
      "@id": "http://schema.org/workHours",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).",
      "rdfs:label": "workHours"
    },
    {
      "@id": "http://schema.org/numberedPosition",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OrganizationRole"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "A number associated with a role in an organization, for example, the number on an athlete's jersey.",
      "rdfs:label": "numberedPosition"
    },
    {
      "@id": "http://schema.org/Casino",
      "@type": "rdfs:Class",
      "rdfs:comment": "A casino.",
      "rdfs:label": "Casino",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EntertainmentBusiness"
      }
    },
    {
      "@id": "http://schema.org/HearingImpairedSupported",
      "@type": "http://schema.org/ContactPointOption",
      "rdfs:comment": "Uses devices to support users with hearing impairments.",
      "rdfs:label": "HearingImpairedSupported"
    },
    {
      "@id": "http://schema.org/broadcastServiceTier",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The type of service required to have access to the channel (e.g. Standard or Premium).",
      "rdfs:label": "broadcastServiceTier"
    },
    {
      "@id": "http://schema.org/SubscribeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/FollowAction\">FollowAction</a>: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/RegisterAction\">RegisterAction</a>: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/JoinAction\">JoinAction</a>: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.</li>\n</ul>\n",
      "rdfs:label": "SubscribeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/geoOverlaps",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.",
      "rdfs:label": "geoOverlaps"
    },
    {
      "@id": "http://schema.org/isrcCode",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRecording"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The International Standard Recording Code for the recording.",
      "rdfs:label": "isrcCode"
    },
    {
      "@id": "http://schema.org/hasOfferCatalog",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Service"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/OfferCatalog"
      },
      "rdfs:comment": "Indicates an OfferCatalog listing for this Organization, Person, or Service.",
      "rdfs:label": "hasOfferCatalog"
    },
    {
      "@id": "http://schema.org/additionalType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.",
      "rdfs:label": "additionalType",
      "rdfs:subPropertyOf": {
        "@id": "rdf:type"
      }
    },
    {
      "@id": "http://schema.org/valuePattern",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Specifies a regular expression for testing literal values according to the HTML spec.",
      "rdfs:label": "valuePattern"
    },
    {
      "@id": "http://schema.org/publication",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PublicationEvent"
      },
      "rdfs:comment": "A publication event associated with the item.",
      "rdfs:label": "publication"
    },
    {
      "@id": "http://schema.org/underName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Reservation"
        },
        {
          "@id": "http://schema.org/Ticket"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "The person or organization the reservation or ticket is for.",
      "rdfs:label": "underName"
    },
    {
      "@id": "http://schema.org/BusinessEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Business event.",
      "rdfs:label": "BusinessEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/AgreeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.",
      "rdfs:label": "AgreeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ReactAction"
      }
    },
    {
      "@id": "http://schema.org/vehicleEngine",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/EngineSpecification"
      },
      "rdfs:comment": "Information about the engine or engines of the vehicle.",
      "rdfs:label": "vehicleEngine"
    },
    {
      "@id": "http://schema.org/GameServer",
      "@type": "rdfs:Class",
      "rdfs:comment": "Server that provides game interaction in a multiplayer game.",
      "rdfs:label": "GameServer",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/DepositAccount",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.",
      "rdfs:label": "DepositAccount",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/InvestmentOrDeposit"
        },
        {
          "@id": "http://schema.org/BankAccount"
        }
      ]
    },
    {
      "@id": "http://schema.org/DigitalDocumentPermissionType",
      "@type": "rdfs:Class",
      "rdfs:comment": "A type of permission which can be granted for accessing a digital document.",
      "rdfs:label": "DigitalDocumentPermissionType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/Motel",
      "@type": "rdfs:Class",
      "rdfs:comment": "A motel.\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "Motel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LodgingBusiness"
      }
    },
    {
      "@id": "http://schema.org/Painting",
      "@type": "rdfs:Class",
      "rdfs:comment": "A painting.",
      "rdfs:label": "Painting",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/text",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The textual content of this CreativeWork.",
      "rdfs:label": "text"
    },
    {
      "@id": "http://schema.org/deathPlace",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The place where the person died.",
      "rdfs:label": "deathPlace"
    },
    {
      "@id": "http://schema.org/name",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/dc/terms/title"
      },
      "rdfs:comment": "The name of the item.",
      "rdfs:label": "name",
      "rdfs:subPropertyOf": {
        "@id": "rdfs:label"
      }
    },
    {
      "@id": "http://schema.org/value",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/PropertyValue"
        },
        {
          "@id": "http://schema.org/MonetaryAmount"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/StructuredValue"
        },
        {
          "@id": "http://schema.org/Boolean"
        }
      ],
      "rdfs:comment": "The value of the quantitative value or property value node.<br/><br/>\n\n<ul>\n<li>For <a class=\"localLink\" href=\"http://schema.org/QuantitativeValue\">QuantitativeValue</a> and <a class=\"localLink\" href=\"http://schema.org/MonetaryAmount\">MonetaryAmount</a>, the recommended type for values is 'Number'.</li>\n<li>For <a class=\"localLink\" href=\"http://schema.org/PropertyValue\">PropertyValue</a>, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.</li>\n<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n</ul>\n",
      "rdfs:label": "value"
    },
    {
      "@id": "http://schema.org/MultiPlayer",
      "@type": "http://schema.org/GamePlayMode",
      "rdfs:comment": "Play mode: MultiPlayer. Requiring or allowing multiple human players to play simultaneously.",
      "rdfs:label": "MultiPlayer"
    },
    {
      "@id": "http://schema.org/ChildCare",
      "@type": "rdfs:Class",
      "rdfs:comment": "A Childcare center.",
      "rdfs:label": "ChildCare",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/smokingAllowed",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.",
      "rdfs:label": "smokingAllowed"
    },
    {
      "@id": "http://schema.org/globalLocationNumber",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The <a href=\"http://www.gs1.org/gln\">Global Location Number</a> (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.",
      "rdfs:label": "globalLocationNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/vehicleModelDate",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The release date of a vehicle model (often used to differentiate versions of the same make and model).",
      "rdfs:label": "vehicleModelDate"
    },
    {
      "@id": "http://schema.org/expires",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "Date the content expires and is no longer useful or available. For example a <a class=\"localLink\" href=\"http://schema.org/VideoObject\">VideoObject</a> or <a class=\"localLink\" href=\"http://schema.org/NewsArticle\">NewsArticle</a> whose availability or relevance is time-limited, or a <a class=\"localLink\" href=\"http://schema.org/ClaimReview\">ClaimReview</a> fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.",
      "rdfs:label": "expires"
    },
    {
      "@id": "http://schema.org/videoFrameSize",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VideoObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The frame size of the video.",
      "rdfs:label": "videoFrameSize"
    },
    {
      "@id": "http://schema.org/publishedOn",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PublicationEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "rdfs:comment": "A broadcast service associated with the publication event.",
      "rdfs:label": "publishedOn"
    },
    {
      "@id": "http://schema.org/InternetCafe",
      "@type": "rdfs:Class",
      "rdfs:comment": "An internet cafe.",
      "rdfs:label": "InternetCafe",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/cheatCode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/VideoGame"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "Cheat codes to the game.",
      "rdfs:label": "cheatCode"
    },
    {
      "@id": "http://schema.org/PaymentStatusType",
      "@type": "rdfs:Class",
      "rdfs:comment": "A specific payment status. For example, PaymentDue, PaymentComplete, etc.",
      "rdfs:label": "PaymentStatusType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/MusicAlbumReleaseType",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "The kind of release which this album is: single, EP or album.",
      "rdfs:label": "MusicAlbumReleaseType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/contributor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Event"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A secondary contributor to the CreativeWork or Event.",
      "rdfs:label": "contributor"
    },
    {
      "@id": "http://schema.org/numberOfDoors",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The number of doors.<br/><br/>\n\nTypical unit code(s): C62",
      "rdfs:label": "numberOfDoors"
    },
    {
      "@id": "http://schema.org/Pharmacy",
      "@type": "rdfs:Class",
      "rdfs:comment": "A pharmacy or drugstore.",
      "rdfs:label": "Pharmacy",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/MedicalOrganization"
        },
        {
          "@id": "http://schema.org/MedicalBusiness"
        }
      ]
    },
    {
      "@id": "http://schema.org/deliveryStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DeliveryEvent"
      },
      "rdfs:comment": "New entry added as the package passes through each leg of its journey (from shipment to final delivery).",
      "rdfs:label": "deliveryStatus"
    },
    {
      "@id": "http://schema.org/DefenceEstablishment",
      "@type": "rdfs:Class",
      "rdfs:comment": "A defence establishment, such as an army or navy base.",
      "rdfs:label": "DefenceEstablishment",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/GovernmentBuilding"
      }
    },
    {
      "@id": "http://schema.org/BreadcrumbList",
      "@type": "rdfs:Class",
      "rdfs:comment": "A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.<br/><br/>\n\nThe <a class=\"localLink\" href=\"http://schema.org/position\">position</a> property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an <a class=\"localLink\" href=\"http://schema.org/itemListOrder\">itemListOrder</a> of <a class=\"localLink\" href=\"http://schema.org/ItemListOrderAscending\">ItemListOrderAscending</a> (lower values listed first), and that the first items in this list correspond to the \"top\" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.",
      "rdfs:label": "BreadcrumbList",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ItemList"
      }
    },
    {
      "@id": "http://schema.org/Church",
      "@type": "rdfs:Class",
      "rdfs:comment": "A church.",
      "rdfs:label": "Church",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlaceOfWorship"
      }
    },
    {
      "@id": "http://schema.org/LiquorStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits.",
      "rdfs:label": "LiquorStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/UsedCondition",
      "@type": "http://schema.org/OfferItemCondition",
      "rdfs:comment": "Indicates that the item is used.",
      "rdfs:label": "UsedCondition"
    },
    {
      "@id": "http://schema.org/PublicationIssue",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://www.w3.org/2002/07/owl#equivalentClass": {
        "@id": "http://purl.org/ontology/bibo/Issue"
      },
      "rdfs:comment": "A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.<br/><br/>\n\n<a href=\"http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html\">blog post</a>.",
      "rdfs:label": "PublicationIssue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/GameServerStatus",
      "@type": "rdfs:Class",
      "rdfs:comment": "Status of a game server.",
      "rdfs:label": "GameServerStatus",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/coursePrerequisites",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Course"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/AlignmentObject"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Course"
        }
      ],
      "rdfs:comment": "Requirements for taking the Course. May be completion of another <a class=\"localLink\" href=\"http://schema.org/Course\">Course</a> or a textual description like \"permission of instructor\". Requirements may be a pre-requisite competency, referenced using <a class=\"localLink\" href=\"http://schema.org/AlignmentObject\">AlignmentObject</a>.",
      "rdfs:label": "coursePrerequisites"
    },
    {
      "@id": "http://schema.org/Article",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      },
      "rdfs:comment": "An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.<br/><br/>\n\nSee also <a href=\"http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html\">blog post</a>.",
      "rdfs:label": "Article",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/characterAttribute",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Game"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).",
      "rdfs:label": "characterAttribute"
    },
    {
      "@id": "http://schema.org/albumProductionType",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicAlbum"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicAlbumProductionType"
      },
      "rdfs:comment": "Classification of the album by it's type of content: soundtrack, live album, studio album, etc.",
      "rdfs:label": "albumProductionType"
    },
    {
      "@id": "http://schema.org/UserTweets",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserTweets",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/yearsInOperation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BusinessAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The age of the business.",
      "rdfs:label": "yearsInOperation"
    },
    {
      "@id": "http://schema.org/amountOfThisGood",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TypeAndQuantityNode"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The quantity of the goods included in the offer.",
      "rdfs:label": "amountOfThisGood"
    },
    {
      "@id": "http://schema.org/datasetTimeInterval",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Dataset"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/temporalCoverage"
      },
      "rdfs:comment": "The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).",
      "rdfs:label": "datasetTimeInterval"
    },
    {
      "@id": "http://schema.org/ownedFrom",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OwnershipInfo"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date and time of obtaining the product.",
      "rdfs:label": "ownedFrom"
    },
    {
      "@id": "http://schema.org/ParkingMap",
      "@type": "http://schema.org/MapCategoryType",
      "rdfs:comment": "A parking map.",
      "rdfs:label": "ParkingMap"
    },
    {
      "@id": "http://schema.org/checkinTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/LodgingBusiness"
        },
        {
          "@id": "http://schema.org/LodgingReservation"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The earliest someone may check into a lodging establishment.",
      "rdfs:label": "checkinTime"
    },
    {
      "@id": "http://schema.org/WebPageElement",
      "@type": "rdfs:Class",
      "rdfs:comment": "A web page element, like a table or an image.",
      "rdfs:label": "WebPageElement",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/VideoGame",
      "@type": "rdfs:Class",
      "rdfs:comment": "A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.",
      "rdfs:label": "VideoGame",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/SoftwareApplication"
        },
        {
          "@id": "http://schema.org/Game"
        }
      ]
    },
    {
      "@id": "http://schema.org/resultReview",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ReviewAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Review"
      },
      "rdfs:comment": "A sub property of result. The review that resulted in the performing of the action.",
      "rdfs:label": "resultReview",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/result"
      }
    },
    {
      "@id": "http://schema.org/partOfTVSeries",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TVClip"
        },
        {
          "@id": "http://schema.org/TVSeason"
        },
        {
          "@id": "http://schema.org/TVEpisode"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/TVSeries"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/partOfSeries"
      },
      "rdfs:comment": "The TV series to which this episode or season belongs.",
      "rdfs:label": "partOfTVSeries",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/isPartOf"
      }
    },
    {
      "@id": "http://schema.org/UserInteraction",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserInteraction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/carrier",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ParcelDelivery"
        },
        {
          "@id": "http://schema.org/Flight"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/provider"
      },
      "rdfs:comment": "'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.",
      "rdfs:label": "carrier"
    },
    {
      "@id": "http://schema.org/unsaturatedFatContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of grams of unsaturated fat.",
      "rdfs:label": "unsaturatedFatContent"
    },
    {
      "@id": "http://schema.org/MobilePhoneStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A store that sells mobile phones and related accessories.",
      "rdfs:label": "MobilePhoneStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/billingAddress",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PostalAddress"
      },
      "rdfs:comment": "The billing address for the order.",
      "rdfs:label": "billingAddress"
    },
    {
      "@id": "http://schema.org/maximumAttendeeCapacity",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The total number of individuals that may attend an event or venue.",
      "rdfs:label": "maximumAttendeeCapacity"
    },
    {
      "@id": "http://schema.org/Airline",
      "@type": "rdfs:Class",
      "rdfs:comment": "An organization that provides flights for passengers.",
      "rdfs:label": "Airline",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/birthPlace",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The place where the person was born.",
      "rdfs:label": "birthPlace"
    },
    {
      "@id": "http://schema.org/LiveBlogPosting",
      "@type": "rdfs:Class",
      "rdfs:comment": "A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.",
      "rdfs:label": "LiveBlogPosting",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BlogPosting"
      }
    },
    {
      "@id": "http://schema.org/parentService",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "rdfs:comment": "A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.",
      "rdfs:label": "parentService"
    },
    {
      "@id": "http://schema.org/feesAndCommissionsSpecification",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/FinancialService"
        },
        {
          "@id": "http://schema.org/FinancialProduct"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.",
      "rdfs:label": "feesAndCommissionsSpecification"
    },
    {
      "@id": "http://schema.org/menuAddOn",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1541"
      },
      "http://schema.org/category": "issue-1541",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MenuItem"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MenuItem"
        },
        {
          "@id": "http://schema.org/MenuSection"
        }
      ],
      "rdfs:comment": "Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.",
      "rdfs:label": "menuAddOn"
    },
    {
      "@id": "http://schema.org/geoCrosses",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: \"a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.",
      "rdfs:label": "geoCrosses"
    },
    {
      "@id": "http://schema.org/typicalAgeRange",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The typical expected age range, e.g. '7-9', '11-'.",
      "rdfs:label": "typicalAgeRange"
    },
    {
      "@id": "http://schema.org/bookingAgent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/broker"
      },
      "rdfs:comment": "'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.",
      "rdfs:label": "bookingAgent"
    },
    {
      "@id": "http://schema.org/codeRepository",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareSourceCode"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex).",
      "rdfs:label": "codeRepository"
    },
    {
      "@id": "http://schema.org/vehicleConfiguration",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.",
      "rdfs:label": "vehicleConfiguration"
    },
    {
      "@id": "http://schema.org/BikeStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A bike store.",
      "rdfs:label": "BikeStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/BuddhistTemple",
      "@type": "rdfs:Class",
      "rdfs:comment": "A Buddhist temple.",
      "rdfs:label": "BuddhistTemple",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlaceOfWorship"
      }
    },
    {
      "@id": "http://schema.org/endTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MediaObject"
        },
        {
          "@id": "http://schema.org/FoodEstablishmentReservation"
        },
        {
          "@id": "http://schema.org/Action"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to <em>December</em>. For media, including audio and video, it's the time offset of the end of a clip within a larger file.<br/><br/>\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.",
      "rdfs:label": "endTime"
    },
    {
      "@id": "http://schema.org/steps",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HowToSection"
        },
        {
          "@id": "http://schema.org/HowTo"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/ItemList"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/step"
      },
      "rdfs:comment": "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).",
      "rdfs:label": "steps"
    },
    {
      "@id": "http://schema.org/billingPeriod",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Invoice"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "The time interval used to compute the invoice.",
      "rdfs:label": "billingPeriod"
    },
    {
      "@id": "http://schema.org/gender",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GenderType"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Gender of the person. While http://schema.org/Male and http://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender.",
      "rdfs:label": "gender"
    },
    {
      "@id": "http://schema.org/originAddress",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PostalAddress"
      },
      "rdfs:comment": "Shipper's address.",
      "rdfs:label": "originAddress"
    },
    {
      "@id": "http://schema.org/isLiveBroadcast",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "True is the broadcast is of a live event.",
      "rdfs:label": "isLiveBroadcast"
    },
    {
      "@id": "http://schema.org/numChildren",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LodgingReservation"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Integer"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The number of children staying in the unit.",
      "rdfs:label": "numChildren"
    },
    {
      "@id": "http://schema.org/hoursAvailable",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ContactPoint"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/LocationFeatureSpecification"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/OpeningHoursSpecification"
      },
      "rdfs:comment": "The hours during which this service or contact is available.",
      "rdfs:label": "hoursAvailable"
    },
    {
      "@id": "http://schema.org/MenuSection",
      "@type": "rdfs:Class",
      "rdfs:comment": "A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.",
      "rdfs:label": "MenuSection",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/iataCode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Airline"
        },
        {
          "@id": "http://schema.org/Airport"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "IATA identifier for an airline or airport.",
      "rdfs:label": "iataCode"
    },
    {
      "@id": "http://schema.org/foodEstablishment",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CookAction"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/FoodEstablishment"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "A sub property of location. The specific food establishment where the action occurred.",
      "rdfs:label": "foodEstablishment",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/AutoRental",
      "@type": "rdfs:Class",
      "rdfs:comment": "A car rental business.",
      "rdfs:label": "AutoRental",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AutomotiveBusiness"
      }
    },
    {
      "@id": "http://schema.org/ReadPermission",
      "@type": "http://schema.org/DigitalDocumentPermissionType",
      "rdfs:comment": "Permission to read or view the document.",
      "rdfs:label": "ReadPermission"
    },
    {
      "@id": "http://schema.org/PublicHolidays",
      "@type": "http://schema.org/DayOfWeek",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location. While not technically a \"day of the week\", it can be used with <a class=\"localLink\" href=\"http://schema.org/OpeningHoursSpecification\">OpeningHoursSpecification</a>. In the context of an opening hours specification it can be used to indicate opening hours on public holidays, overriding general opening hours for the day of the week on which a public holiday occurs.",
      "rdfs:label": "PublicHolidays"
    },
    {
      "@id": "http://schema.org/LoanOrCredit",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A financial product for the loaning of an amount of money under agreed terms and charges.",
      "rdfs:label": "LoanOrCredit",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialProduct"
      }
    },
    {
      "@id": "http://schema.org/parents",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/parent"
      },
      "rdfs:comment": "A parents of the person.",
      "rdfs:label": "parents"
    },
    {
      "@id": "http://schema.org/predecessorOf",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ProductModel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ProductModel"
      },
      "rdfs:comment": "A pointer from a previous, often discontinued variant of the product to its newer variant.",
      "rdfs:label": "predecessorOf"
    },
    {
      "@id": "http://schema.org/HotelRoom",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A hotel room is a single room in a hotel.\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "HotelRoom",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Room"
      }
    },
    {
      "@id": "http://schema.org/departurePlatform",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TrainTrip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The platform from which the train departs.",
      "rdfs:label": "departurePlatform"
    },
    {
      "@id": "http://schema.org/actionAccessibilityRequirement",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
      },
      "http://schema.org/category": "issue-1741",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ConsumeAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ActionAccessSpecification"
      },
      "rdfs:comment": "A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed.",
      "rdfs:label": "actionAccessibilityRequirement"
    },
    {
      "@id": "http://schema.org/percentile25",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QuantitativeValueDistribution"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The 25th percentile value.",
      "rdfs:label": "percentile25"
    },
    {
      "@id": "http://schema.org/BroadcastEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "An over the air or online broadcast event.",
      "rdfs:label": "BroadcastEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PublicationEvent"
      }
    },
    {
      "@id": "http://schema.org/organizer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "An organizer of an Event.",
      "rdfs:label": "organizer"
    },
    {
      "@id": "http://schema.org/broadcastFrequencyValue",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1004"
      },
      "http://schema.org/category": "issue-1004",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastFrequencySpecification"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The frequency in MHz for a particular broadcast.",
      "rdfs:label": "broadcastFrequencyValue"
    },
    {
      "@id": "http://schema.org/Zoo",
      "@type": "rdfs:Class",
      "rdfs:comment": "A zoo.",
      "rdfs:label": "Zoo",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/broadcastDisplayName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The name displayed in the channel guide. For many US affiliates, it is the network name.",
      "rdfs:label": "broadcastDisplayName"
    },
    {
      "@id": "http://schema.org/WebSite",
      "@type": "rdfs:Class",
      "rdfs:comment": "A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.",
      "rdfs:label": "WebSite",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/Movie",
      "@type": "rdfs:Class",
      "rdfs:comment": "A movie.",
      "rdfs:label": "Movie",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/EventReservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservation for an event like a concert, sporting event, or lecture.<br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class=\"localLink\" href=\"http://schema.org/Offer\">Offer</a>.",
      "rdfs:label": "EventReservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/EventPostponed",
      "@type": "http://schema.org/EventStatusType",
      "rdfs:comment": "The event has been postponed and no new date has been set. The event's previousStartDate should be set.",
      "rdfs:label": "EventPostponed"
    },
    {
      "@id": "http://schema.org/OrganizeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of manipulating/administering/supervising/controlling one or more objects.",
      "rdfs:label": "OrganizeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/Audience",
      "@type": "rdfs:Class",
      "rdfs:comment": "Intended audience for an item, i.e. the group for whom the item was created.",
      "rdfs:label": "Audience",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/members",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/ProgramMembership"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/member"
      },
      "rdfs:comment": "A member of this organization.",
      "rdfs:label": "members"
    },
    {
      "@id": "http://schema.org/printColumn",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NewsArticle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The number of the column in which the NewsArticle appears in the print edition.",
      "rdfs:label": "printColumn"
    },
    {
      "@id": "http://schema.org/EventRescheduled",
      "@type": "http://schema.org/EventStatusType",
      "rdfs:comment": "The event has been rescheduled. The event's previousStartDate should be set to the old date and the startDate should be set to the event's new date. (If the event has been rescheduled multiple times, the previousStartDate property may be repeated).",
      "rdfs:label": "EventRescheduled"
    },
    {
      "@id": "http://schema.org/Restaurant",
      "@type": "rdfs:Class",
      "rdfs:comment": "A restaurant.",
      "rdfs:label": "Restaurant",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/broadcastAffiliateOf",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The media network(s) whose content is broadcast on this station.",
      "rdfs:label": "broadcastAffiliateOf"
    },
    {
      "@id": "http://schema.org/Integer",
      "@type": "rdfs:Class",
      "rdfs:comment": "Data type: Integer.",
      "rdfs:label": "Integer",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Number"
      }
    },
    {
      "@id": "http://schema.org/UseAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of applying an object to its intended purpose.",
      "rdfs:label": "UseAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ConsumeAction"
      }
    },
    {
      "@id": "http://schema.org/APIReference",
      "@type": "rdfs:Class",
      "rdfs:comment": "Reference documentation for application programming interfaces (APIs).",
      "rdfs:label": "APIReference",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TechArticle"
      }
    },
    {
      "@id": "http://schema.org/DepartmentStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A department store.",
      "rdfs:label": "DepartmentStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/FilmAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of capturing sound and moving images on film, video, or digitally.",
      "rdfs:label": "FilmAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreateAction"
      }
    },
    {
      "@id": "http://schema.org/arrivalBusStop",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BusTrip"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/BusStop"
        },
        {
          "@id": "http://schema.org/BusStation"
        }
      ],
      "rdfs:comment": "The stop or station from which the bus arrives.",
      "rdfs:label": "arrivalBusStop"
    },
    {
      "@id": "http://schema.org/programmingLanguage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareSourceCode"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/ComputerLanguage"
        }
      ],
      "rdfs:comment": "The computer programming language.",
      "rdfs:label": "programmingLanguage"
    },
    {
      "@id": "http://schema.org/position",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/ListItem"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Integer"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The position of an item in a series or sequence of items.",
      "rdfs:label": "position"
    },
    {
      "@id": "http://schema.org/athlete",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SportsTeam"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A person that acts as performing member of a sports team; a player as opposed to a coach.",
      "rdfs:label": "athlete"
    },
    {
      "@id": "http://schema.org/partOfInvoice",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Invoice"
      },
      "rdfs:comment": "The order is being paid as part of the referenced Invoice.",
      "rdfs:label": "partOfInvoice"
    },
    {
      "@id": "http://schema.org/bccRecipient",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Message"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        }
      ],
      "rdfs:comment": "A sub property of recipient. The recipient blind copied on a message.",
      "rdfs:label": "bccRecipient",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/recipient"
      }
    },
    {
      "@id": "http://schema.org/SoftwareApplication",
      "@type": "rdfs:Class",
      "rdfs:comment": "A software application.",
      "rdfs:label": "SoftwareApplication",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/fuelType",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Vehicle"
        },
        {
          "@id": "http://schema.org/EngineSpecification"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QualitativeValue"
        },
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.",
      "rdfs:label": "fuelType"
    },
    {
      "@id": "http://schema.org/availability",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ItemAvailability"
      },
      "rdfs:comment": "The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.",
      "rdfs:label": "availability"
    },
    {
      "@id": "http://schema.org/icaoCode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Airport"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "ICAO identifier for an airport.",
      "rdfs:label": "icaoCode"
    },
    {
      "@id": "http://schema.org/BefriendAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/FollowAction\">FollowAction</a>: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.</li>\n</ul>\n",
      "rdfs:label": "BefriendAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/vehicleIdentificationNumber",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.",
      "rdfs:label": "vehicleIdentificationNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/serialNumber"
      }
    },
    {
      "@id": "http://schema.org/SportingGoodsStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A sporting goods store.",
      "rdfs:label": "SportingGoodsStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/durationOfWarranty",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WarrantyPromise"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.",
      "rdfs:label": "durationOfWarranty"
    },
    {
      "@id": "http://schema.org/gameTip",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VideoGame"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "Links to tips, tactics, etc.",
      "rdfs:label": "gameTip"
    },
    {
      "@id": "http://schema.org/partySize",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TaxiReservation"
        },
        {
          "@id": "http://schema.org/FoodEstablishmentReservation"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Integer"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "Number of people the reservation should accommodate.",
      "rdfs:label": "partySize"
    },
    {
      "@id": "http://schema.org/TextDigitalDocument",
      "@type": "rdfs:Class",
      "rdfs:comment": "A file composed primarily of text.",
      "rdfs:label": "TextDigitalDocument",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/DigitalDocument"
      }
    },
    {
      "@id": "http://schema.org/median",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QuantitativeValueDistribution"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The median value.",
      "rdfs:label": "median"
    },
    {
      "@id": "http://schema.org/priceSpecification",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/TradeAction"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PriceSpecification"
      },
      "rdfs:comment": "One or more detailed price specifications, indicating the unit price and delivery or payment charges.",
      "rdfs:label": "priceSpecification"
    },
    {
      "@id": "http://schema.org/providerMobility",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Service"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Indicates the mobility of a provided service (e.g. 'static', 'dynamic').",
      "rdfs:label": "providerMobility"
    },
    {
      "@id": "http://schema.org/DemoAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "DemoAlbum.",
      "rdfs:label": "DemoAlbum"
    },
    {
      "@id": "http://schema.org/QuantitativeValueDistribution",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "rdfs:comment": "A statistical distribution of values.",
      "rdfs:label": "QuantitativeValueDistribution",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/CoOp",
      "@type": "http://schema.org/GamePlayMode",
      "rdfs:comment": "Play mode: CoOp. Co-operative games, where you play on the same team with friends.",
      "rdfs:label": "CoOp"
    },
    {
      "@id": "http://schema.org/releasedEvent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PublicationEvent"
      },
      "rdfs:comment": "The place and time the release was issued, expressed as a PublicationEvent.",
      "rdfs:label": "releasedEvent"
    },
    {
      "@id": "http://schema.org/speakable",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1389"
      },
      "http://schema.org/category": "issue-1389",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/WebPage"
        },
        {
          "@id": "http://schema.org/Article"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/SpeakableSpecification"
        }
      ],
      "rdfs:comment": "Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.<br/><br/>\n\nThe <em>speakable</em> property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:<br/><br/>\n\n1.) <em>id-value</em> URL references - uses <em>id-value</em> of an element in the page being annotated. The simplest use of <em>speakable</em> has (potentially relative) URL values, referencing identified sections of the document concerned.<br/><br/>\n\n2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the <a class=\"localLink\" href=\"http://schema.org/cssSelector\">cssSelector</a> property.<br/><br/>\n\n3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the <a class=\"localLink\" href=\"http://schema.org/xpath\">xpath</a> property.<br/><br/>\n\nFor more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this\nwe define a supporting type, <a class=\"localLink\" href=\"http://schema.org/SpeakableSpecification\">SpeakableSpecification</a>  which is defined to be a possible value of the <em>speakable</em> property.",
      "rdfs:label": "speakable"
    },
    {
      "@id": "http://schema.org/educationalUse",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The purpose of a work in the context of education; for example, 'assignment', 'group work'.",
      "rdfs:label": "educationalUse"
    },
    {
      "@id": "http://schema.org/Waterfall",
      "@type": "rdfs:Class",
      "rdfs:comment": "A waterfall, like Niagara.",
      "rdfs:label": "Waterfall",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BodyOfWater"
      }
    },
    {
      "@id": "http://schema.org/itemReviewed",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Review"
        },
        {
          "@id": "http://schema.org/AggregateRating"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "The item that is being reviewed/rated.",
      "rdfs:label": "itemReviewed"
    },
    {
      "@id": "http://schema.org/availableOnDevice",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Device required to run the application. Used in cases where a specific make/model is required to run the application.",
      "rdfs:label": "availableOnDevice"
    },
    {
      "@id": "http://schema.org/OfficeEquipmentStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "An office equipment store.",
      "rdfs:label": "OfficeEquipmentStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/attendees",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/attendee"
      },
      "rdfs:comment": "A person attending the event.",
      "rdfs:label": "attendees"
    },
    {
      "@id": "http://schema.org/stepValue",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.",
      "rdfs:label": "stepValue"
    },
    {
      "@id": "http://schema.org/RightHandDriving",
      "@type": "http://schema.org/SteeringPositionValue",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "The steering position is on the right side of the vehicle (viewed from the main direction of driving).",
      "rdfs:label": "RightHandDriving"
    },
    {
      "@id": "http://schema.org/departureAirport",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Airport"
      },
      "rdfs:comment": "The airport where the flight originates.",
      "rdfs:label": "departureAirport"
    },
    {
      "@id": "http://schema.org/inventoryLevel",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/SomeProducts"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The current approximate inventory level for the item or items.",
      "rdfs:label": "inventoryLevel"
    },
    {
      "@id": "http://schema.org/salaryCurrency",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/EmployeeRole"
        },
        {
          "@id": "http://schema.org/JobPosting"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The currency (coded using <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217</a> ) used for the main salary information in this job posting or for this employee.",
      "rdfs:label": "salaryCurrency"
    },
    {
      "@id": "http://schema.org/PaymentComplete",
      "@type": "http://schema.org/PaymentStatusType",
      "rdfs:comment": "The payment has been received and processed.",
      "rdfs:label": "PaymentComplete"
    },
    {
      "@id": "http://schema.org/PlanAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of planning the execution of an event/task/action/reservation/plan to a future date.",
      "rdfs:label": "PlanAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/OrganizeAction"
      }
    },
    {
      "@id": "http://schema.org/landlord",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/RentAction"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A sub property of participant. The owner of the real estate property.",
      "rdfs:label": "landlord",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/confirmationNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Order"
        },
        {
          "@id": "http://schema.org/Invoice"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A number that confirms the given order or payment has been received.",
      "rdfs:label": "confirmationNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/alumniOf",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/alumni"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/EducationalOrganization"
        }
      ],
      "rdfs:comment": "An organization that the person is an alumni of.",
      "rdfs:label": "alumniOf"
    },
    {
      "@id": "http://schema.org/MovieTheater",
      "@type": "rdfs:Class",
      "rdfs:comment": "A movie theater.",
      "rdfs:label": "MovieTheater",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/CivicStructure"
        },
        {
          "@id": "http://schema.org/EntertainmentBusiness"
        }
      ]
    },
    {
      "@id": "http://schema.org/commentText",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UserComments"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The text of the UserComment.",
      "rdfs:label": "commentText"
    },
    {
      "@id": "http://schema.org/contentLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The location depicted or described in the content. For example, the location in a photograph or painting.",
      "rdfs:label": "contentLocation"
    },
    {
      "@id": "http://schema.org/fuelConsumption",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).<br/><br/>\n\n<ul>\n<li>Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use <a class=\"localLink\" href=\"http://schema.org/unitText\">unitText</a> to indicate the unit of measurement, e.g. L/100 km.</li>\n<li>Note 2: There are two ways of indicating the fuel consumption, <a class=\"localLink\" href=\"http://schema.org/fuelConsumption\">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class=\"localLink\" href=\"http://schema.org/fuelEfficiency\">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li>\n<li>Note 3: Often, the absolute value is useful only when related to driving speed (\"at 80 km/h\") or usage pattern (\"city traffic\"). You can use <a class=\"localLink\" href=\"http://schema.org/valueReference\">valueReference</a> to link the value for the fuel consumption to another value.</li>\n</ul>\n",
      "rdfs:label": "fuelConsumption"
    },
    {
      "@id": "http://schema.org/childMinAge",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParentAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "Minimal age of the child.",
      "rdfs:label": "childMinAge"
    },
    {
      "@id": "http://schema.org/catalog",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Dataset"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DataCatalog"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/includedInDataCatalog"
      },
      "rdfs:comment": "A data catalog which contains this dataset.",
      "rdfs:label": "catalog"
    },
    {
      "@id": "http://schema.org/schemaVersion",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "Indicates (by URL or string) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using an URL such as http://schema.org/version/2.0/ if precise indication of schema version was required by some application.",
      "rdfs:label": "schemaVersion"
    },
    {
      "@id": "http://schema.org/GatedResidenceCommunity",
      "@type": "rdfs:Class",
      "rdfs:comment": "Residence type: Gated community.",
      "rdfs:label": "GatedResidenceCommunity",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Residence"
      }
    },
    {
      "@id": "http://schema.org/dateSent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Message"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date/time at which the message was sent.",
      "rdfs:label": "dateSent"
    },
    {
      "@id": "http://schema.org/Country",
      "@type": "rdfs:Class",
      "rdfs:comment": "A country.",
      "rdfs:label": "Country",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AdministrativeArea"
      }
    },
    {
      "@id": "http://schema.org/PlaceOfWorship",
      "@type": "rdfs:Class",
      "rdfs:comment": "Place of worship, such as a church, synagogue, or mosque.",
      "rdfs:label": "PlaceOfWorship",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/HowToTip",
      "@type": "rdfs:Class",
      "rdfs:comment": "An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection).",
      "rdfs:label": "HowToTip",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/ListItem"
        }
      ]
    },
    {
      "@id": "http://schema.org/accessibilityFeature",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).",
      "rdfs:label": "accessibilityFeature"
    },
    {
      "@id": "http://schema.org/ComputerLanguage",
      "@type": "rdfs:Class",
      "rdfs:comment": "This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the <a class=\"localLink\" href=\"http://schema.org/Language\">Language</a> type.",
      "rdfs:label": "ComputerLanguage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/PerformanceRole",
      "@type": "rdfs:Class",
      "rdfs:comment": "A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.",
      "rdfs:label": "PerformanceRole",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Role"
      }
    },
    {
      "@id": "http://schema.org/UnitPriceSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "The price asked for a given offer by the respective organization or person.",
      "rdfs:label": "UnitPriceSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PriceSpecification"
      }
    },
    {
      "@id": "http://schema.org/aggregateRating",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Brand"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/AggregateRating"
      },
      "rdfs:comment": "The overall rating, based on a collection of reviews or ratings, of the item.",
      "rdfs:label": "aggregateRating"
    },
    {
      "@id": "http://schema.org/subtitleLanguage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Movie"
        },
        {
          "@id": "http://schema.org/ScreeningEvent"
        },
        {
          "@id": "http://schema.org/TVEpisode"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Language"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Languages in which subtitles/captions are available, in <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard format</a>.",
      "rdfs:label": "subtitleLanguage"
    },
    {
      "@id": "http://schema.org/PerformAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of participating in performance arts.",
      "rdfs:label": "PerformAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlayAction"
      }
    },
    {
      "@id": "http://schema.org/BedType",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "https://github.com/schemaorg/schemaorg/issues/1262"
        },
        {
          "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
        }
      ],
      "http://schema.org/category": "issue-1262",
      "rdfs:comment": "A type of bed. This is used for indicating the bed or beds available in an accommodation.",
      "rdfs:label": "BedType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/QualitativeValue"
      }
    },
    {
      "@id": "http://schema.org/HinduDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet conforming to Hindu dietary practices, in particular, beef-free.",
      "rdfs:label": "HinduDiet"
    },
    {
      "@id": "http://schema.org/Mountain",
      "@type": "rdfs:Class",
      "rdfs:comment": "A mountain, like Mount Whitney or Mount Everest.",
      "rdfs:label": "Mountain",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Landform"
      }
    },
    {
      "@id": "http://schema.org/recipeIngredient",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A single ingredient used in the recipe, e.g. sugar, flour or garlic.",
      "rdfs:label": "recipeIngredient",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/supply"
      }
    },
    {
      "@id": "http://schema.org/trainName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TrainTrip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The name of the train (e.g. The Orient Express).",
      "rdfs:label": "trainName"
    },
    {
      "@id": "http://schema.org/locationCreated",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.",
      "rdfs:label": "locationCreated"
    },
    {
      "@id": "http://schema.org/recipeInstructions",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/ItemList"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items.",
      "rdfs:label": "recipeInstructions",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/step"
      }
    },
    {
      "@id": "http://schema.org/loser",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WinAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A sub property of participant. The loser of the action.",
      "rdfs:label": "loser",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/ReceiveAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of physically/electronically taking delivery of an object thathas been transferred from an origin to a destination. Reciprocal of SendAction.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/SendAction\">SendAction</a>: The reciprocal of ReceiveAction.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/TakeAction\">TakeAction</a>: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).</li>\n</ul>\n",
      "rdfs:label": "ReceiveAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TransferAction"
      }
    },
    {
      "@id": "http://schema.org/VideoGameClip",
      "@type": "rdfs:Class",
      "rdfs:comment": "A short segment/part of a video game.",
      "rdfs:label": "VideoGameClip",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Clip"
      }
    },
    {
      "@id": "http://schema.org/inAlbum",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRecording"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicAlbum"
      },
      "rdfs:comment": "The album to which this recording belongs.",
      "rdfs:label": "inAlbum"
    },
    {
      "@id": "http://schema.org/itemShipped",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Product"
      },
      "rdfs:comment": "Item(s) being shipped.",
      "rdfs:label": "itemShipped"
    },
    {
      "@id": "http://schema.org/free",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PublicationEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/isAccessibleForFree"
      },
      "rdfs:comment": "A flag to signal that the item, event, or place is accessible for free.",
      "rdfs:label": "free"
    },
    {
      "@id": "http://schema.org/MusicStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A music store.",
      "rdfs:label": "MusicStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/Crematorium",
      "@type": "rdfs:Class",
      "rdfs:comment": "A crematorium.",
      "rdfs:label": "Crematorium",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/contentSize",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "File size in (mega/kilo) bytes.",
      "rdfs:label": "contentSize"
    },
    {
      "@id": "http://schema.org/isConsumableFor",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Product"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Product"
      },
      "rdfs:comment": "A pointer to another product (or multiple products) for which this product is a consumable.",
      "rdfs:label": "isConsumableFor"
    },
    {
      "@id": "http://schema.org/accessModeSufficient",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1100"
      },
      "http://schema.org/category": "issue-1110",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual.",
      "rdfs:label": "accessModeSufficient"
    },
    {
      "@id": "http://schema.org/itemListOrder",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ItemList"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/ItemListOrderType"
        }
      ],
      "rdfs:comment": "Type of ordering (e.g. Ascending, Descending, Unordered).",
      "rdfs:label": "itemListOrder"
    },
    {
      "@id": "http://schema.org/QuoteAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent quotes/estimates/appraises an object/product/service with a price at a location/store.",
      "rdfs:label": "QuoteAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/artform",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VisualArtwork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.",
      "rdfs:label": "artform"
    },
    {
      "@id": "http://schema.org/temporalCoverage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/DateTime"
        }
      ],
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/dc/terms/temporal"
      },
      "rdfs:comment": "The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in <a href=\"https://en.wikipedia.org/wiki/ISO_8601#Time_intervals\">ISO 8601 time interval format</a>. In\n      the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written \"2011/2012\"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.\n      Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via \"1939/1945\".<br/><br/>\n\nOpen-ended date ranges can be written with \"..\" in place of the end date. For example, \"2015-11/..\" indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.",
      "rdfs:label": "temporalCoverage"
    },
    {
      "@id": "http://schema.org/PropertyValue",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.<br/><br/>\n\nAlways use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.",
      "rdfs:label": "PropertyValue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/codeSampleType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareSourceCode"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.",
      "rdfs:label": "codeSampleType"
    },
    {
      "@id": "http://schema.org/ListItem",
      "@type": "rdfs:Class",
      "rdfs:comment": "An list item, e.g. a step in a checklist or how-to description.",
      "rdfs:label": "ListItem",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/ContactPage",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web page type: Contact page.",
      "rdfs:label": "ContactPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/WebApplication",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web applications.",
      "rdfs:label": "WebApplication",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SoftwareApplication"
      }
    },
    {
      "@id": "http://schema.org/BroadcastFrequencySpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1004"
      },
      "http://schema.org/category": "issue-1004",
      "rdfs:comment": "The frequency in MHz and the modulation used for a particular BroadcastService.",
      "rdfs:label": "BroadcastFrequencySpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/BlogPosting",
      "@type": "rdfs:Class",
      "rdfs:comment": "A blog post.",
      "rdfs:label": "BlogPosting",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SocialMediaPosting"
      }
    },
    {
      "@id": "http://schema.org/eligibleTransactionVolume",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/PriceSpecification"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PriceSpecification"
      },
      "rdfs:comment": "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.",
      "rdfs:label": "eligibleTransactionVolume"
    },
    {
      "@id": "http://schema.org/equal",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "rdfs:comment": "This ordering relation for qualitative values indicates that the subject is equal to the object.",
      "rdfs:label": "equal"
    },
    {
      "@id": "http://schema.org/LodgingReservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservation for lodging at a hotel, motel, inn, etc.<br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.",
      "rdfs:label": "LodgingReservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/subEvent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/superEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "rdfs:comment": "An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.",
      "rdfs:label": "subEvent"
    },
    {
      "@id": "http://schema.org/PreOrderAction",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1125"
      },
      "http://schema.org/category": "issue-1125",
      "rdfs:comment": "An agent orders a (not yet released) object/product/service to be delivered/sent.",
      "rdfs:label": "PreOrderAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/MediaSubscription",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
      },
      "http://schema.org/category": "issue-1741",
      "rdfs:comment": "A subscription which allows a user to access media including audio, video, books, etc.",
      "rdfs:label": "MediaSubscription",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/PresentationDigitalDocument",
      "@type": "rdfs:Class",
      "rdfs:comment": "A file containing slides or used for a presentation.",
      "rdfs:label": "PresentationDigitalDocument",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/DigitalDocument"
      }
    },
    {
      "@id": "http://schema.org/blogPost",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Blog"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BlogPosting"
      },
      "rdfs:comment": "A posting that is part of this blog.",
      "rdfs:label": "blogPost"
    },
    {
      "@id": "http://schema.org/GlutenFreeDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet exclusive of gluten.",
      "rdfs:label": "GlutenFreeDiet"
    },
    {
      "@id": "http://schema.org/Report",
      "@type": "rdfs:Class",
      "rdfs:comment": "A Report generated by governmental or non-governmental organization.",
      "rdfs:label": "Report",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Article"
      }
    },
    {
      "@id": "http://schema.org/accountablePerson",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "Specifies the Person that is legally accountable for the CreativeWork.",
      "rdfs:label": "accountablePerson"
    },
    {
      "@id": "http://schema.org/homeLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        }
      ],
      "rdfs:comment": "A contact location for a person's residence.",
      "rdfs:label": "homeLocation",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/nutrition",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Recipe"
        },
        {
          "@id": "http://schema.org/MenuItem"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "rdfs:comment": "Nutrition information about the recipe or menu item.",
      "rdfs:label": "nutrition"
    },
    {
      "@id": "http://schema.org/embedUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "A URL pointing to a player for a specific video. In general, this is the information in the <code>src</code> element of an <code>embed</code> tag and should not be the same as the content of the <code>loc</code> tag.",
      "rdfs:label": "embedUrl"
    },
    {
      "@id": "http://schema.org/area",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/serviceArea"
      },
      "rdfs:comment": "The area within which users can expect to reach the broadcast service.",
      "rdfs:label": "area"
    },
    {
      "@id": "http://schema.org/orderDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "Date order was placed.",
      "rdfs:label": "orderDate"
    },
    {
      "@id": "http://schema.org/Monday",
      "@type": "http://schema.org/DayOfWeek",
      "http://schema.org/sameAs": {
        "@id": "http://www.wikidata.org/entity/Q105"
      },
      "rdfs:comment": "The day of the week between Sunday and Tuesday.",
      "rdfs:label": "Monday"
    },
    {
      "@id": "http://schema.org/partOfSeason",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Episode"
        },
        {
          "@id": "http://schema.org/Clip"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWorkSeason"
      },
      "rdfs:comment": "The season to which this episode belongs.",
      "rdfs:label": "partOfSeason",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/isPartOf"
      }
    },
    {
      "@id": "http://schema.org/StructuredValue",
      "@type": "rdfs:Class",
      "rdfs:comment": "Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.",
      "rdfs:label": "StructuredValue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/interestRate",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FinancialProduct"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.",
      "rdfs:label": "interestRate"
    },
    {
      "@id": "http://schema.org/partOfOrder",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Order"
      },
      "rdfs:comment": "The overall order the items in this delivery were included in.",
      "rdfs:label": "partOfOrder"
    },
    {
      "@id": "http://schema.org/totalPrice",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Ticket"
        },
        {
          "@id": "http://schema.org/Reservation"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/PriceSpecification"
        },
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The total price for the reservation or ticket, including applicable taxes, shipping, etc.<br/><br/>\n\nUsage guidelines:<br/><br/>\n\n<ul>\n<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n</ul>\n",
      "rdfs:label": "totalPrice"
    },
    {
      "@id": "http://schema.org/OfferItemCondition",
      "@type": "rdfs:Class",
      "rdfs:comment": "A list of possible conditions for the item.",
      "rdfs:label": "OfferItemCondition",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/inPlaylist",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRecording"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicPlaylist"
      },
      "rdfs:comment": "The playlist to which this recording belongs.",
      "rdfs:label": "inPlaylist"
    },
    {
      "@id": "http://schema.org/subEvents",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/subEvent"
      },
      "rdfs:comment": "Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.",
      "rdfs:label": "subEvents"
    },
    {
      "@id": "http://schema.org/LocationFeatureSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.",
      "rdfs:label": "LocationFeatureSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PropertyValue"
      }
    },
    {
      "@id": "http://schema.org/identifier",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/PropertyValue"
        }
      ],
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/dc/terms/identifier"
      },
      "rdfs:comment": "The identifier property represents any kind of identifier for any kind of <a class=\"localLink\" href=\"http://schema.org/Thing\">Thing</a>, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See <a href=\"/docs/datamodel.html#identifierBg\">background notes</a> for more details.",
      "rdfs:label": "identifier"
    },
    {
      "@id": "http://schema.org/MusicRelease",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "A MusicRelease is a specific release of a music album.",
      "rdfs:label": "MusicRelease",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MusicPlaylist"
      }
    },
    {
      "@id": "http://schema.org/ReservationConfirmed",
      "@type": "http://schema.org/ReservationStatusType",
      "rdfs:comment": "The status of a confirmed reservation.",
      "rdfs:label": "ReservationConfirmed"
    },
    {
      "@id": "http://schema.org/availableAtOrFrom",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The place(s) from which the offer can be obtained (e.g. store locations).",
      "rdfs:label": "availableAtOrFrom",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/areaServed"
      }
    },
    {
      "@id": "http://schema.org/TechArticle",
      "@type": "rdfs:Class",
      "rdfs:comment": "A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.",
      "rdfs:label": "TechArticle",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Article"
      }
    },
    {
      "@id": "http://schema.org/maxPrice",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PriceSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The highest price if the price is a range.",
      "rdfs:label": "maxPrice"
    },
    {
      "@id": "http://schema.org/countryOfOrigin",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/TVEpisode"
        },
        {
          "@id": "http://schema.org/TVSeason"
        },
        {
          "@id": "http://schema.org/Movie"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Country"
      },
      "rdfs:comment": "The country of the principal offices of the production company or individual responsible for the movie or program.",
      "rdfs:label": "countryOfOrigin"
    },
    {
      "@id": "http://schema.org/seatRow",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Seat"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The row location of the reserved seat (e.g., B).",
      "rdfs:label": "seatRow"
    },
    {
      "@id": "http://schema.org/Sculpture",
      "@type": "rdfs:Class",
      "rdfs:comment": "A piece of sculpture.",
      "rdfs:label": "Sculpture",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/scheduledPaymentDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Invoice"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The date the invoice is scheduled to be paid.",
      "rdfs:label": "scheduledPaymentDate"
    },
    {
      "@id": "http://schema.org/SaleEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Sales event.",
      "rdfs:label": "SaleEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/duns",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The Dun &amp; Bradstreet DUNS number for identifying an organization or business person.",
      "rdfs:label": "duns",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/ComputerStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A computer store.",
      "rdfs:label": "ComputerStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/jobBenefits",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Description of benefits associated with the job.",
      "rdfs:label": "jobBenefits"
    },
    {
      "@id": "http://schema.org/RadioStation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A radio station.",
      "rdfs:label": "RadioStation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/option",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ChooseAction"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Thing"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/actionOption"
      },
      "rdfs:comment": "A sub property of object. The options subject to this action.",
      "rdfs:label": "option",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/SingleRelease",
      "@type": "http://schema.org/MusicAlbumReleaseType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "SingleRelease.",
      "rdfs:label": "SingleRelease"
    },
    {
      "@id": "http://schema.org/gameLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Game"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/PostalAddress"
        }
      ],
      "rdfs:comment": "Real or fictional location of the game (or part of game).",
      "rdfs:label": "gameLocation"
    },
    {
      "@id": "http://schema.org/OrderProblem",
      "@type": "http://schema.org/OrderStatus",
      "rdfs:comment": "OrderStatus representing that there is a problem with the order.",
      "rdfs:label": "OrderProblem"
    },
    {
      "@id": "http://schema.org/Map",
      "@type": "rdfs:Class",
      "rdfs:comment": "A map.",
      "rdfs:label": "Map",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/hasMenu",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FoodEstablishment"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Menu"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Either the actual menu as a structured representation, as text, or a URL of the menu.",
      "rdfs:label": "hasMenu"
    },
    {
      "@id": "http://schema.org/taxID",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.",
      "rdfs:label": "taxID",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/courseMode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CourseInstance"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. \"online\", \"onsite\" or \"blended\"; \"synchronous\" or \"asynchronous\"; \"full-time\" or \"part-time\") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).",
      "rdfs:label": "courseMode"
    },
    {
      "@id": "http://schema.org/spatialCoverage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/dc/terms/spatial"
      },
      "rdfs:comment": "The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of\n      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates\n      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.",
      "rdfs:label": "spatialCoverage",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/contentLocation"
      }
    },
    {
      "@id": "http://schema.org/GolfCourse",
      "@type": "rdfs:Class",
      "rdfs:comment": "A golf course.",
      "rdfs:label": "GolfCourse",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SportsActivityLocation"
      }
    },
    {
      "@id": "http://schema.org/followee",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FollowAction"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A sub property of object. The person or organization being followed.",
      "rdfs:label": "followee",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/recipe",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CookAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "rdfs:comment": "A sub property of instrument. The recipe/instructions used to perform the action.",
      "rdfs:label": "recipe",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/instrument"
      }
    },
    {
      "@id": "http://schema.org/musicBy",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/VideoObject"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/MovieSeries"
        },
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/Movie"
        },
        {
          "@id": "http://schema.org/VideoGame"
        },
        {
          "@id": "http://schema.org/Clip"
        },
        {
          "@id": "http://schema.org/Episode"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MusicGroup"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The composer of the soundtrack.",
      "rdfs:label": "musicBy"
    },
    {
      "@id": "http://schema.org/lyricist",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "The person who wrote the words.",
      "rdfs:label": "lyricist"
    },
    {
      "@id": "http://schema.org/DepartAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.",
      "rdfs:label": "DepartAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MoveAction"
      }
    },
    {
      "@id": "http://schema.org/TollFree",
      "@type": "http://schema.org/ContactPointOption",
      "rdfs:comment": "The associated telephone number is toll free.",
      "rdfs:label": "TollFree"
    },
    {
      "@id": "http://schema.org/ActionAccessSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
      },
      "http://schema.org/category": "issue-1741",
      "rdfs:comment": "A set of requirements that a must be fulfilled in order to perform an Action.",
      "rdfs:label": "ActionAccessSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/amount",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
        },
        {
          "@id": "https://github.com/schemaorg/schemaorg/issues/1253"
        }
      ],
      "http://schema.org/category": [
        "issue-1698",
        "issue-1253"
      ],
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MoneyTransfer"
        },
        {
          "@id": "http://schema.org/LoanOrCredit"
        },
        {
          "@id": "http://schema.org/InvestmentOrDeposit"
        },
        {
          "@id": "http://schema.org/DatedMoneySpecification"
        },
        {
          "@id": "http://schema.org/MonetaryGrant"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/MonetaryAmount"
        }
      ],
      "rdfs:comment": "The amount of money.",
      "rdfs:label": "amount"
    },
    {
      "@id": "http://schema.org/reviews",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Review"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/review"
      },
      "rdfs:comment": "Review of the item.",
      "rdfs:label": "reviews"
    },
    {
      "@id": "http://schema.org/reservationFor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "The thing -- flight, event, restaurant,etc. being reserved.",
      "rdfs:label": "reservationFor"
    },
    {
      "@id": "http://schema.org/priceCurrency",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Ticket"
        },
        {
          "@id": "http://schema.org/TradeAction"
        },
        {
          "@id": "http://schema.org/PriceSpecification"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Reservation"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The currency of the price, or a price component when attached to <a class=\"localLink\" href=\"http://schema.org/PriceSpecification\">PriceSpecification</a> and its subtypes.<br/><br/>\n\nUse standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\".",
      "rdfs:label": "priceCurrency"
    },
    {
      "@id": "http://schema.org/Number",
      "@type": [
        "http://schema.org/DataType",
        "rdfs:Class"
      ],
      "rdfs:comment": "Data type: Number.<br/><br/>\n\nUsage guidelines:<br/><br/>\n\n<ul>\n<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n</ul>\n",
      "rdfs:label": "Number"
    },
    {
      "@id": "http://schema.org/Comment",
      "@type": "rdfs:Class",
      "rdfs:comment": "A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the <a class=\"localLink\" href=\"http://schema.org/text\">text</a> property, and its topic via <a class=\"localLink\" href=\"http://schema.org/about\">about</a>, properties shared with all CreativeWorks.",
      "rdfs:label": "Comment",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/ShoeStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A shoe store.",
      "rdfs:label": "ShoeStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/SuspendAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).",
      "rdfs:label": "SuspendAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ControlAction"
      }
    },
    {
      "@id": "http://schema.org/serviceLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ServiceChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The location (e.g. civic structure, local business, etc.) where a person can go to access the service.",
      "rdfs:label": "serviceLocation"
    },
    {
      "@id": "http://schema.org/executableLibraryName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/APIReference"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Library file name e.g., mscorlib.dll, system.web.dll.",
      "rdfs:label": "executableLibraryName"
    },
    {
      "@id": "http://schema.org/trainNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TrainTrip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The unique identifier for the train.",
      "rdfs:label": "trainNumber"
    },
    {
      "@id": "http://schema.org/sugarContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of grams of sugar.",
      "rdfs:label": "sugarContent"
    },
    {
      "@id": "http://schema.org/WPSideBar",
      "@type": "rdfs:Class",
      "rdfs:comment": "A sidebar section of the page.",
      "rdfs:label": "WPSideBar",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPageElement"
      }
    },
    {
      "@id": "http://schema.org/catalogNumber",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRelease"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The catalog number for the release.",
      "rdfs:label": "catalogNumber"
    },
    {
      "@id": "http://schema.org/answerCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Question"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of answers this question has received.",
      "rdfs:label": "answerCount"
    },
    {
      "@id": "http://schema.org/seatingType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Seat"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QualitativeValue"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The type/class of the seat.",
      "rdfs:label": "seatingType"
    },
    {
      "@id": "http://schema.org/FlightReservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservation for air travel.<br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class=\"localLink\" href=\"http://schema.org/Offer\">Offer</a>.",
      "rdfs:label": "FlightReservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/offers",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MenuItem"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/AggregateOffer"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Trip"
        },
        {
          "@id": "http://schema.org/Event"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Offer"
      },
      "rdfs:comment": "An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.",
      "rdfs:label": "offers"
    },
    {
      "@id": "http://schema.org/AlignmentObject",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass"
      },
      "rdfs:comment": "An intangible item that describes an alignment between a learning resource and a node in an educational framework.",
      "rdfs:label": "AlignmentObject",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/editor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "Specifies the Person who edited the CreativeWork.",
      "rdfs:label": "editor"
    },
    {
      "@id": "http://schema.org/discussionUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "A link to the page containing the comments of the CreativeWork.",
      "rdfs:label": "discussionUrl"
    },
    {
      "@id": "http://schema.org/SellAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.",
      "rdfs:label": "SellAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/educationalCredentialAwarded",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Course"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/EducationalOccupationalCredential"
        }
      ],
      "rdfs:comment": "A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course.",
      "rdfs:label": "educationalCredentialAwarded"
    },
    {
      "@id": "http://schema.org/PetStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A pet store.",
      "rdfs:label": "PetStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/coverageEndTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LiveBlogPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes.",
      "rdfs:label": "coverageEndTime"
    },
    {
      "@id": "http://schema.org/numberOfPreviousOwners",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The number of owners of the vehicle, including the current one.<br/><br/>\n\nTypical unit code(s): C62",
      "rdfs:label": "numberOfPreviousOwners"
    },
    {
      "@id": "http://schema.org/OnDemandEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.",
      "rdfs:label": "OnDemandEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PublicationEvent"
      }
    },
    {
      "@id": "http://schema.org/artworkSurface",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VisualArtwork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc.",
      "rdfs:label": "artworkSurface"
    },
    {
      "@id": "http://schema.org/HalalDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet conforming to Islamic dietary practices.",
      "rdfs:label": "HalalDiet"
    },
    {
      "@id": "http://schema.org/issueNumber",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PublicationIssue"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Integer"
        }
      ],
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/ontology/bibo/issue"
      },
      "rdfs:comment": "Identifies the issue of publication; for example, \"iii\" or \"2\".",
      "rdfs:label": "issueNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/position"
      }
    },
    {
      "@id": "http://schema.org/AutoDealer",
      "@type": "rdfs:Class",
      "rdfs:comment": "An car dealership.",
      "rdfs:label": "AutoDealer",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AutomotiveBusiness"
      }
    },
    {
      "@id": "http://schema.org/ChooseAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of expressing a preference from a set of options or a large or unbounded set of choices/options.",
      "rdfs:label": "ChooseAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AssessAction"
      }
    },
    {
      "@id": "http://schema.org/customer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Order"
        },
        {
          "@id": "http://schema.org/Invoice"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "Party placing the order or paying the invoice.",
      "rdfs:label": "customer"
    },
    {
      "@id": "http://schema.org/RestrictedDiet",
      "@type": "rdfs:Class",
      "rdfs:comment": "A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.",
      "rdfs:label": "RestrictedDiet",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/GovernmentOffice",
      "@type": "rdfs:Class",
      "rdfs:comment": "A government office&#x2014;for example, an IRS or DMV office.",
      "rdfs:label": "GovernmentOffice",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/Place",
      "@type": "rdfs:Class",
      "rdfs:comment": "Entities that have a somewhat fixed, physical extension.",
      "rdfs:label": "Place",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Thing"
      }
    },
    {
      "@id": "http://schema.org/QualitativeValue",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.",
      "rdfs:label": "QualitativeValue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/petsAllowed",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/LodgingBusiness"
        },
        {
          "@id": "http://schema.org/Accommodation"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Boolean"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.",
      "rdfs:label": "petsAllowed"
    },
    {
      "@id": "http://schema.org/artEdition",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VisualArtwork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Integer"
        }
      ],
      "rdfs:comment": "The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example \"20\").",
      "rdfs:label": "artEdition"
    },
    {
      "@id": "http://schema.org/award",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An award won by or for this item.",
      "rdfs:label": "award"
    },
    {
      "@id": "http://schema.org/application",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EntryPoint"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/actionApplication"
      },
      "rdfs:comment": "An application that can complete the request.",
      "rdfs:label": "application"
    },
    {
      "@id": "http://schema.org/streetAddress",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PostalAddress"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The street address. For example, 1600 Amphitheatre Pkwy.",
      "rdfs:label": "streetAddress"
    },
    {
      "@id": "http://schema.org/containsSeason",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWorkSeason"
      },
      "rdfs:comment": "A season that is part of the media series.",
      "rdfs:label": "containsSeason",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/hasPart"
      }
    },
    {
      "@id": "http://schema.org/category",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
      },
      "http://schema.org/category": "issue-1741",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ActionAccessSpecification"
        },
        {
          "@id": "http://schema.org/PhysicalActivity"
        },
        {
          "@id": "http://schema.org/Invoice"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/PhysicalActivityCategory"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Thing"
        }
      ],
      "rdfs:comment": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
      "rdfs:label": "category"
    },
    {
      "@id": "http://schema.org/contactOption",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ContactPoint"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ContactPointOption"
      },
      "rdfs:comment": "An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).",
      "rdfs:label": "contactOption"
    },
    {
      "@id": "http://schema.org/SendAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/ReceiveAction\">ReceiveAction</a>: The reciprocal of SendAction.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/GiveAction\">GiveAction</a>: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).</li>\n</ul>\n",
      "rdfs:label": "SendAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TransferAction"
      }
    },
    {
      "@id": "http://schema.org/VinylFormat",
      "@type": "http://schema.org/MusicReleaseFormatType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "VinylFormat.",
      "rdfs:label": "VinylFormat"
    },
    {
      "@id": "http://schema.org/LeaveAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent leaves an event / group with participants/friends at a location.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/JoinAction\">JoinAction</a>: The antonym of LeaveAction.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/UnRegisterAction\">UnRegisterAction</a>: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.</li>\n</ul>\n",
      "rdfs:label": "LeaveAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/claimReviewed",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1061"
      },
      "http://schema.org/category": "issue-1061",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ClaimReview"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A short summary of the specific claims reviewed in a ClaimReview.",
      "rdfs:label": "claimReviewed"
    },
    {
      "@id": "http://schema.org/GasStation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A gas station.",
      "rdfs:label": "GasStation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AutomotiveBusiness"
      }
    },
    {
      "@id": "http://schema.org/pageEnd",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Chapter"
        },
        {
          "@id": "http://schema.org/PublicationIssue"
        },
        {
          "@id": "http://schema.org/PublicationVolume"
        },
        {
          "@id": "http://schema.org/Article"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Integer"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/ontology/bibo/pageEnd"
      },
      "rdfs:comment": "The page on which the work ends; for example \"138\" or \"xvi\".",
      "rdfs:label": "pageEnd"
    },
    {
      "@id": "http://schema.org/Mosque",
      "@type": "rdfs:Class",
      "rdfs:comment": "A mosque.",
      "rdfs:label": "Mosque",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlaceOfWorship"
      }
    },
    {
      "@id": "http://schema.org/birthDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "Date of birth.",
      "rdfs:label": "birthDate"
    },
    {
      "@id": "http://schema.org/AssessAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of forming one's opinion, reaction or sentiment.",
      "rdfs:label": "AssessAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/CommentAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of generating a comment about a subject.",
      "rdfs:label": "CommentAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CommunicateAction"
      }
    },
    {
      "@id": "http://schema.org/ItemListOrderDescending",
      "@type": "http://schema.org/ItemListOrderType",
      "rdfs:comment": "An ItemList ordered with higher values listed first.",
      "rdfs:label": "ItemListOrderDescending"
    },
    {
      "@id": "http://schema.org/Library",
      "@type": "rdfs:Class",
      "rdfs:comment": "A library.",
      "rdfs:label": "Library",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/TouristInformationCenter",
      "@type": "rdfs:Class",
      "rdfs:comment": "A tourist information center.",
      "rdfs:label": "TouristInformationCenter",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/step",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/HowTo"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/HowToSection"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/HowToStep"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection.",
      "rdfs:label": "step"
    },
    {
      "@id": "http://schema.org/MusicComposition",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "A musical composition.",
      "rdfs:label": "MusicComposition",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/photos",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/ImageObject"
        },
        {
          "@id": "http://schema.org/Photograph"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/photo"
      },
      "rdfs:comment": "Photographs of this place.",
      "rdfs:label": "photos"
    },
    {
      "@id": "http://schema.org/makesOffer",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/offeredBy"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Offer"
      },
      "rdfs:comment": "A pointer to products or services offered by the organization or person.",
      "rdfs:label": "makesOffer"
    },
    {
      "@id": "http://schema.org/map",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/hasMap"
      },
      "rdfs:comment": "A URL to a map of the place.",
      "rdfs:label": "map"
    },
    {
      "@id": "http://schema.org/instrument",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Action"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "The object that helped the agent perform the action. e.g. John wrote a book with <em>a pen</em>.",
      "rdfs:label": "instrument"
    },
    {
      "@id": "http://schema.org/orderQuantity",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OrderItem"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The number of the item ordered. If the property is not set, assume the quantity is one.",
      "rdfs:label": "orderQuantity"
    },
    {
      "@id": "http://schema.org/width",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/MediaObject"
        },
        {
          "@id": "http://schema.org/VisualArtwork"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Distance"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The width of the item.",
      "rdfs:label": "width"
    },
    {
      "@id": "http://schema.org/priceValidUntil",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Offer"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The date after which the price is no longer available.",
      "rdfs:label": "priceValidUntil"
    },
    {
      "@id": "http://schema.org/givenName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property.",
      "rdfs:label": "givenName"
    },
    {
      "@id": "http://schema.org/SelfStorage",
      "@type": "rdfs:Class",
      "rdfs:comment": "A self-storage facility.",
      "rdfs:label": "SelfStorage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/ticketNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Ticket"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The unique identifier for the ticket.",
      "rdfs:label": "ticketNumber"
    },
    {
      "@id": "http://schema.org/proficiencyLevel",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TechArticle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Proficiency needed for this content; expected values: 'Beginner', 'Expert'.",
      "rdfs:label": "proficiencyLevel"
    },
    {
      "@id": "http://schema.org/valueMaxLength",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "Specifies the allowed range for number of characters in a literal value.",
      "rdfs:label": "valueMaxLength"
    },
    {
      "@id": "http://schema.org/cholesterolContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of milligrams of cholesterol.",
      "rdfs:label": "cholesterolContent"
    },
    {
      "@id": "http://schema.org/ReservationPending",
      "@type": "http://schema.org/ReservationStatusType",
      "rdfs:comment": "The status of a reservation when a request has been sent, but not confirmed.",
      "rdfs:label": "ReservationPending"
    },
    {
      "@id": "http://schema.org/GeoShape",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      },
      "rdfs:comment": "The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.",
      "rdfs:label": "GeoShape",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/EntertainmentBusiness",
      "@type": "rdfs:Class",
      "rdfs:comment": "A business providing entertainment.",
      "rdfs:label": "EntertainmentBusiness",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/warrantyScope",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WarrantyPromise"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/WarrantyScope"
      },
      "rdfs:comment": "The scope of the warranty promise.",
      "rdfs:label": "warrantyScope"
    },
    {
      "@id": "http://schema.org/datePosted",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "Publication date for the job posting.",
      "rdfs:label": "datePosted"
    },
    {
      "@id": "http://schema.org/BroadcastChannel",
      "@type": "rdfs:Class",
      "rdfs:comment": "A unique instance of a BroadcastService on a CableOrSatelliteService lineup.",
      "rdfs:label": "BroadcastChannel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/Florist",
      "@type": "rdfs:Class",
      "rdfs:comment": "A florist.",
      "rdfs:label": "Florist",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/directors",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/Movie"
        },
        {
          "@id": "http://schema.org/Clip"
        },
        {
          "@id": "http://schema.org/Episode"
        },
        {
          "@id": "http://schema.org/VideoObject"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/VideoGame"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/MovieSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/director"
      },
      "rdfs:comment": "A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.",
      "rdfs:label": "directors"
    },
    {
      "@id": "http://schema.org/runtimePlatform",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareSourceCode"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).",
      "rdfs:label": "runtimePlatform"
    },
    {
      "@id": "http://schema.org/contactPoints",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ContactPoint"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/contactPoint"
      },
      "rdfs:comment": "A contact point for a person or organization.",
      "rdfs:label": "contactPoints"
    },
    {
      "@id": "http://schema.org/skills",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Occupation"
        },
        {
          "@id": "http://schema.org/JobPosting"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Skills required to fulfill this role or in this Occupation.",
      "rdfs:label": "skills"
    },
    {
      "@id": "http://schema.org/copyrightHolder",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The party holding the legal copyright to the CreativeWork.",
      "rdfs:label": "copyrightHolder"
    },
    {
      "@id": "http://schema.org/paymentStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Invoice"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/PaymentStatusType"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The status of payment; whether the invoice has been paid or not.",
      "rdfs:label": "paymentStatus"
    },
    {
      "@id": "http://schema.org/characterName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PerformanceRole"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The name of a character played in some acting or performing role, i.e. in a PerformanceRole.",
      "rdfs:label": "characterName"
    },
    {
      "@id": "http://schema.org/Mass",
      "@type": "rdfs:Class",
      "rdfs:comment": "Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'.",
      "rdfs:label": "Mass",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Quantity"
      }
    },
    {
      "@id": "http://schema.org/breadcrumb",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/BreadcrumbList"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "A set of links that can help a user understand and navigate a website hierarchy.",
      "rdfs:label": "breadcrumb"
    },
    {
      "@id": "http://schema.org/dependencies",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TechArticle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Prerequisites needed to fulfill steps in article.",
      "rdfs:label": "dependencies"
    },
    {
      "@id": "http://schema.org/HowToTool",
      "@type": "rdfs:Class",
      "rdfs:comment": "A tool used (but not consumed) when performing instructions for how to achieve a result.",
      "rdfs:label": "HowToTool",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HowToItem"
      }
    },
    {
      "@id": "http://schema.org/CassetteFormat",
      "@type": "http://schema.org/MusicReleaseFormatType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "CassetteFormat.",
      "rdfs:label": "CassetteFormat"
    },
    {
      "@id": "http://schema.org/PaymentMethod",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.<br/><br/>\n\nCommonly used values:<br/><br/>\n\n<ul>\n<li>http://purl.org/goodrelations/v1#ByBankTransferInAdvance</li>\n<li>http://purl.org/goodrelations/v1#ByInvoice</li>\n<li>http://purl.org/goodrelations/v1#Cash</li>\n<li>http://purl.org/goodrelations/v1#CheckInAdvance</li>\n<li>http://purl.org/goodrelations/v1#COD</li>\n<li>http://purl.org/goodrelations/v1#DirectDebit</li>\n<li>http://purl.org/goodrelations/v1#GoogleCheckout</li>\n<li>http://purl.org/goodrelations/v1#PayPal</li>\n<li>http://purl.org/goodrelations/v1#PaySwarm</li>\n</ul>\n",
      "rdfs:label": "PaymentMethod",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/UserPlusOnes",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserPlusOnes",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/Barcode",
      "@type": "rdfs:Class",
      "rdfs:comment": "An image of a visual machine-readable code such as a barcode or QR code.",
      "rdfs:label": "Barcode",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ImageObject"
      }
    },
    {
      "@id": "http://schema.org/branchCode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A short textual code (also called \"store code\") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.<br/><br/>\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code \"3047\" is a branchCode for a particular branch.",
      "rdfs:label": "branchCode"
    },
    {
      "@id": "http://schema.org/WebPage",
      "@type": "rdfs:Class",
      "rdfs:comment": "A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.",
      "rdfs:label": "WebPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/merchant",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/seller"
      },
      "rdfs:comment": "'merchant' is an out-dated term for 'seller'.",
      "rdfs:label": "merchant"
    },
    {
      "@id": "http://schema.org/broker",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Invoice"
        },
        {
          "@id": "http://schema.org/Reservation"
        },
        {
          "@id": "http://schema.org/Order"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.",
      "rdfs:label": "broker"
    },
    {
      "@id": "http://schema.org/Residence",
      "@type": "rdfs:Class",
      "rdfs:comment": "The place where a person lives.",
      "rdfs:label": "Residence",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Place"
      }
    },
    {
      "@id": "http://schema.org/UserPageVisits",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserPageVisits",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/expectedArrivalFrom",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The earliest date the package may arrive.",
      "rdfs:label": "expectedArrivalFrom"
    },
    {
      "@id": "http://schema.org/dataFeedElement",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DataFeed"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Thing"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/DataFeedItem"
        }
      ],
      "rdfs:comment": "An item within in a data feed. Data feeds may have many elements.",
      "rdfs:label": "dataFeedElement"
    },
    {
      "@id": "http://schema.org/addOn",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Offer"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Offer"
      },
      "rdfs:comment": "An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).",
      "rdfs:label": "addOn"
    },
    {
      "@id": "http://schema.org/FrontWheelDriveConfiguration",
      "@type": "http://schema.org/DriveWheelConfigurationValue",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "Front-wheel drive is a transmission layout where the engine drives the front wheels.",
      "rdfs:label": "FrontWheelDriveConfiguration"
    },
    {
      "@id": "http://schema.org/sportsTeam",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ExerciseAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/SportsTeam"
      },
      "rdfs:comment": "A sub property of participant. The sports team that participated on this action.",
      "rdfs:label": "sportsTeam",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/inBroadcastLineup",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CableOrSatelliteService"
      },
      "rdfs:comment": "The CableOrSatelliteService offering the channel.",
      "rdfs:label": "inBroadcastLineup"
    },
    {
      "@id": "http://schema.org/featureList",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Features or modules provided by this application (and possibly required by other applications).",
      "rdfs:label": "featureList"
    },
    {
      "@id": "http://schema.org/accessibilityHazard",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).",
      "rdfs:label": "accessibilityHazard"
    },
    {
      "@id": "http://schema.org/albumReleaseType",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicAlbum"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicAlbumReleaseType"
      },
      "rdfs:comment": "The kind of release which this album is: single, EP or album.",
      "rdfs:label": "albumReleaseType"
    },
    {
      "@id": "http://schema.org/surface",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VisualArtwork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/artworkSurface"
      },
      "rdfs:comment": "A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.",
      "rdfs:label": "surface",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/material"
      }
    },
    {
      "@id": "http://schema.org/copyrightYear",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The year during which the claimed copyright for the CreativeWork was first asserted.",
      "rdfs:label": "copyrightYear"
    },
    {
      "@id": "http://schema.org/sportsEvent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ExerciseAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/SportsEvent"
      },
      "rdfs:comment": "A sub property of location. The sports event where this action occurred.",
      "rdfs:label": "sportsEvent",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/Continent",
      "@type": "rdfs:Class",
      "rdfs:comment": "One of the continents (for example, Europe or Africa).",
      "rdfs:label": "Continent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Landform"
      }
    },
    {
      "@id": "http://schema.org/actionPlatform",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EntryPoint"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.",
      "rdfs:label": "actionPlatform"
    },
    {
      "@id": "http://schema.org/distance",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TravelAction"
        },
        {
          "@id": "http://schema.org/ExerciseAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Distance"
      },
      "rdfs:comment": "The distance travelled, e.g. exercising or travelling.",
      "rdfs:label": "distance"
    },
    {
      "@id": "http://schema.org/longitude",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GeoCoordinates"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The longitude of a location. For example <code>-122.08585</code> (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>).",
      "rdfs:label": "longitude"
    },
    {
      "@id": "http://schema.org/issn",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Blog"
        },
        {
          "@id": "http://schema.org/WebSite"
        },
        {
          "@id": "http://schema.org/Dataset"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/ontology/bibo/issn"
      },
      "rdfs:comment": "The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.",
      "rdfs:label": "issn",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/hasMap",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Map"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "A URL to a map of the place.",
      "rdfs:label": "hasMap"
    },
    {
      "@id": "http://schema.org/BusTrip",
      "@type": "rdfs:Class",
      "rdfs:comment": "A trip on a commercial bus line.",
      "rdfs:label": "BusTrip",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Trip"
      }
    },
    {
      "@id": "http://schema.org/awards",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/award"
      },
      "rdfs:comment": "Awards won by or for this item.",
      "rdfs:label": "awards"
    },
    {
      "@id": "http://schema.org/hasBroadcastChannel",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1004"
      },
      "http://schema.org/category": "issue-1004",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/providesBroadcastService"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BroadcastChannel"
      },
      "rdfs:comment": "A broadcast channel of a broadcast service.",
      "rdfs:label": "hasBroadcastChannel"
    },
    {
      "@id": "http://schema.org/incentives",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/incentiveCompensation"
      },
      "rdfs:comment": "Description of bonus and commission compensation aspects of the job.",
      "rdfs:label": "incentives"
    },
    {
      "@id": "http://schema.org/printEdition",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NewsArticle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The edition of the print product in which the NewsArticle appears.",
      "rdfs:label": "printEdition"
    },
    {
      "@id": "http://schema.org/UnRegisterAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of un-registering from a service.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/RegisterAction\">RegisterAction</a>: antonym of UnRegisterAction.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/LeaveAction\">LeaveAction</a>: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.</li>\n</ul>\n",
      "rdfs:label": "UnRegisterAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/OfflinePermanently",
      "@type": "http://schema.org/GameServerStatus",
      "rdfs:comment": "Game server status: OfflinePermanently. Server is offline and not available.",
      "rdfs:label": "OfflinePermanently"
    },
    {
      "@id": "http://schema.org/opponent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ExerciseAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A sub property of participant. The opponent on this action.",
      "rdfs:label": "opponent",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/releaseOf",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRelease"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/albumRelease"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicAlbum"
      },
      "rdfs:comment": "The album this is a release of.",
      "rdfs:label": "releaseOf"
    },
    {
      "@id": "http://schema.org/LoseAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of being defeated in a competitive activity.",
      "rdfs:label": "LoseAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AchieveAction"
      }
    },
    {
      "@id": "http://schema.org/participant",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Action"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "Other co-agents that participated in the action indirectly. e.g. John wrote a book with <em>Steve</em>.",
      "rdfs:label": "participant"
    },
    {
      "@id": "http://schema.org/ShoppingCenter",
      "@type": "rdfs:Class",
      "rdfs:comment": "A shopping center or mall.",
      "rdfs:label": "ShoppingCenter",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/Flight",
      "@type": "rdfs:Class",
      "rdfs:comment": "An airline flight.",
      "rdfs:label": "Flight",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Trip"
      }
    },
    {
      "@id": "http://schema.org/menu",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FoodEstablishment"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Menu"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/hasMenu"
      },
      "rdfs:comment": "Either the actual menu as a structured representation, as text, or a URL of the menu.",
      "rdfs:label": "menu"
    },
    {
      "@id": "http://schema.org/servicePostalAddress",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ServiceChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PostalAddress"
      },
      "rdfs:comment": "The address for accessing the service by mail.",
      "rdfs:label": "servicePostalAddress"
    },
    {
      "@id": "http://schema.org/HowToStep",
      "@type": "rdfs:Class",
      "rdfs:comment": "A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.",
      "rdfs:label": "HowToStep",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/ListItem"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/ItemList"
        }
      ]
    },
    {
      "@id": "http://schema.org/videoQuality",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VideoObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The quality of the video.",
      "rdfs:label": "videoQuality"
    },
    {
      "@id": "http://schema.org/OfferCatalog",
      "@type": "rdfs:Class",
      "rdfs:comment": "An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.",
      "rdfs:label": "OfferCatalog",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ItemList"
      }
    },
    {
      "@id": "http://schema.org/warranty",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/WarrantyPromise"
      },
      "rdfs:comment": "The warranty promise(s) included in the offer.",
      "rdfs:label": "warranty"
    },
    {
      "@id": "http://schema.org/includesObject",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/TypeAndQuantityNode"
      },
      "rdfs:comment": "This links to a node or nodes indicating the exact quantity of the products included in the offer.",
      "rdfs:label": "includesObject"
    },
    {
      "@id": "http://schema.org/liveBlogUpdate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LiveBlogPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BlogPosting"
      },
      "rdfs:comment": "An update to the LiveBlog.",
      "rdfs:label": "liveBlogUpdate"
    },
    {
      "@id": "http://schema.org/CreativeWorkSeries",
      "@type": "rdfs:Class",
      "rdfs:comment": "A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike <a class=\"localLink\" href=\"http://schema.org/ItemList\">ItemList</a> which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).<br/><br/>\n\nSpecific subtypes are available for describing <a class=\"localLink\" href=\"http://schema.org/TVSeries\">TVSeries</a>, <a class=\"localLink\" href=\"http://schema.org/RadioSeries\">RadioSeries</a>, <a class=\"localLink\" href=\"http://schema.org/MovieSeries\">MovieSeries</a>, <a class=\"localLink\" href=\"http://schema.org/BookSeries\">BookSeries</a>, <a class=\"localLink\" href=\"http://schema.org/Periodical\">Periodical</a> and <a class=\"localLink\" href=\"http://schema.org/VideoGameSeries\">VideoGameSeries</a>. In each case, the <a class=\"localLink\" href=\"http://schema.org/hasPart\">hasPart</a> / <a class=\"localLink\" href=\"http://schema.org/isPartOf\">isPartOf</a> properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.<br/><br/>\n\nIt is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.",
      "rdfs:label": "CreativeWorkSeries",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/Series"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ]
    },
    {
      "@id": "http://schema.org/eligibleQuantity",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/PriceSpecification"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.",
      "rdfs:label": "eligibleQuantity"
    },
    {
      "@id": "http://schema.org/priceComponent",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CompoundPriceSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/UnitPriceSpecification"
      },
      "rdfs:comment": "This property links to all <a class=\"localLink\" href=\"http://schema.org/UnitPriceSpecification\">UnitPriceSpecification</a> nodes that apply in parallel for the <a class=\"localLink\" href=\"http://schema.org/CompoundPriceSpecification\">CompoundPriceSpecification</a> node.",
      "rdfs:label": "priceComponent"
    },
    {
      "@id": "http://schema.org/NightClub",
      "@type": "rdfs:Class",
      "rdfs:comment": "A nightclub or discotheque.",
      "rdfs:label": "NightClub",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EntertainmentBusiness"
      }
    },
    {
      "@id": "http://schema.org/quest",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Game"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "The task that a player-controlled character, or group of characters may complete in order to gain a reward.",
      "rdfs:label": "quest"
    },
    {
      "@id": "http://schema.org/ccRecipient",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Message"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        }
      ],
      "rdfs:comment": "A sub property of recipient. The recipient copied on a message.",
      "rdfs:label": "ccRecipient",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/recipient"
      }
    },
    {
      "@id": "http://schema.org/significantLink",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.",
      "rdfs:label": "significantLink"
    },
    {
      "@id": "http://schema.org/applicationSubCategory",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Subcategory of the application, e.g. 'Arcade Game'.",
      "rdfs:label": "applicationSubCategory"
    },
    {
      "@id": "http://schema.org/PaymentPastDue",
      "@type": "http://schema.org/PaymentStatusType",
      "rdfs:comment": "The payment is due and considered late.",
      "rdfs:label": "PaymentPastDue"
    },
    {
      "@id": "http://schema.org/recordedAt",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/recordedIn"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "rdfs:comment": "The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.",
      "rdfs:label": "recordedAt"
    },
    {
      "@id": "http://schema.org/recordedAs",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/recordingOf"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicRecording"
      },
      "rdfs:comment": "An audio recording of the work.",
      "rdfs:label": "recordedAs"
    },
    {
      "@id": "http://schema.org/spatial",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/dc/terms/spatial"
      },
      "rdfs:comment": "The \"spatial\" property can be used in cases when more specific properties\n(e.g. <a class=\"localLink\" href=\"http://schema.org/locationCreated\">locationCreated</a>, <a class=\"localLink\" href=\"http://schema.org/spatialCoverage\">spatialCoverage</a>, <a class=\"localLink\" href=\"http://schema.org/contentLocation\">contentLocation</a>) are not known to be appropriate.",
      "rdfs:label": "spatial"
    },
    {
      "@id": "http://schema.org/FourWheelDriveConfiguration",
      "@type": "http://schema.org/DriveWheelConfigurationValue",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "Four-wheel drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability.",
      "rdfs:label": "FourWheelDriveConfiguration"
    },
    {
      "@id": "http://schema.org/additionalProperty",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/QualitativeValue"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PropertyValue"
      },
      "rdfs:comment": "A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.<br/><br/>\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. http://schema.org/width, http://schema.org/color, http://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.",
      "rdfs:label": "additionalProperty"
    },
    {
      "@id": "http://schema.org/serviceOutput",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Service"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "The tangible thing generated by the service, e.g. a passport, permit, etc.",
      "rdfs:label": "serviceOutput"
    },
    {
      "@id": "http://schema.org/DataFeed",
      "@type": "rdfs:Class",
      "rdfs:comment": "A single feed providing structured information about one or more entities or topics.",
      "rdfs:label": "DataFeed",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Dataset"
      }
    },
    {
      "@id": "http://schema.org/State",
      "@type": "rdfs:Class",
      "rdfs:comment": "A state or province of a country.",
      "rdfs:label": "State",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AdministrativeArea"
      }
    },
    {
      "@id": "http://schema.org/commentCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.",
      "rdfs:label": "commentCount"
    },
    {
      "@id": "http://schema.org/Playground",
      "@type": "rdfs:Class",
      "rdfs:comment": "A playground.",
      "rdfs:label": "Playground",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/relatedLink",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "A link related to this web page, for example to other related web pages.",
      "rdfs:label": "relatedLink"
    },
    {
      "@id": "http://schema.org/AppendAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of inserting at the end if an ordered collection.",
      "rdfs:label": "AppendAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InsertAction"
      }
    },
    {
      "@id": "http://schema.org/replacee",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ReplaceAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "A sub property of object. The object that is being replaced.",
      "rdfs:label": "replacee",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/InteractionCounter",
      "@type": "rdfs:Class",
      "rdfs:comment": "A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.",
      "rdfs:label": "InteractionCounter",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/PaymentAutomaticallyApplied",
      "@type": "http://schema.org/PaymentStatusType",
      "rdfs:comment": "An automatic payment system is in place and will be used.",
      "rdfs:label": "PaymentAutomaticallyApplied"
    },
    {
      "@id": "http://schema.org/replacer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ReplaceAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "A sub property of object. The object that replaces.",
      "rdfs:label": "replacer",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/ParkingFacility",
      "@type": "rdfs:Class",
      "rdfs:comment": "A parking lot or other parking facility.",
      "rdfs:label": "ParkingFacility",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/reportNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Report"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The number or other unique designator assigned to a Report by the publishing organization.",
      "rdfs:label": "reportNumber"
    },
    {
      "@id": "http://schema.org/CookAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of producing/preparing food.",
      "rdfs:label": "CookAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreateAction"
      }
    },
    {
      "@id": "http://schema.org/Male",
      "@type": "http://schema.org/GenderType",
      "rdfs:comment": "The male gender.",
      "rdfs:label": "Male"
    },
    {
      "@id": "http://schema.org/AuthorizeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of granting permission to an object.",
      "rdfs:label": "AuthorizeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AllocateAction"
      }
    },
    {
      "@id": "http://schema.org/BookSeries",
      "@type": "rdfs:Class",
      "rdfs:comment": "A series of books. Included books can be indicated with the hasPart property.",
      "rdfs:label": "BookSeries",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWorkSeries"
      }
    },
    {
      "@id": "http://schema.org/SpokenWordAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "SpokenWordAlbum.",
      "rdfs:label": "SpokenWordAlbum"
    },
    {
      "@id": "http://schema.org/vendor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BuyAction"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/seller"
      },
      "rdfs:comment": "'vendor' is an earlier term for 'seller'.",
      "rdfs:label": "vendor",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/UserDownloads",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserDownloads",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/PawnShop",
      "@type": "rdfs:Class",
      "rdfs:comment": "A shop that will buy, or lend money against the security of, personal possessions.",
      "rdfs:label": "PawnShop",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/winner",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LoseAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A sub property of participant. The winner of the action.",
      "rdfs:label": "winner",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/articleSection",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Article"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.",
      "rdfs:label": "articleSection"
    },
    {
      "@id": "http://schema.org/AssignAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of allocating an action/event/task to some destination (someone or something).",
      "rdfs:label": "AssignAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AllocateAction"
      }
    },
    {
      "@id": "http://schema.org/PayAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent pays a price to a participant.",
      "rdfs:label": "PayAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/HighSchool",
      "@type": "rdfs:Class",
      "rdfs:comment": "A high school.",
      "rdfs:label": "HighSchool",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EducationalOrganization"
      }
    },
    {
      "@id": "http://schema.org/tool",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HowToDirection"
        },
        {
          "@id": "http://schema.org/HowTo"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/HowToTool"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.",
      "rdfs:label": "tool",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/instrument"
      }
    },
    {
      "@id": "http://schema.org/fileFormat",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/encodingFormat"
      },
      "rdfs:comment": "Media type, typically MIME format (see <a href=\"http://www.iana.org/assignments/media-types/media-types.xhtml\">IANA site</a>) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.",
      "rdfs:label": "fileFormat"
    },
    {
      "@id": "http://schema.org/TypeAndQuantityNode",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.",
      "rdfs:label": "TypeAndQuantityNode",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/SteeringPositionValue",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "A value indicating a steering position.",
      "rdfs:label": "SteeringPositionValue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/QualitativeValue"
      }
    },
    {
      "@id": "http://schema.org/AudiobookFormat",
      "@type": "http://schema.org/BookFormatType",
      "rdfs:comment": "Book format: Audiobook. This is an enumerated value for use with the bookFormat property. There is also a type 'Audiobook' in the bib extension which includes Audiobook specific properties.",
      "rdfs:label": "AudiobookFormat"
    },
    {
      "@id": "http://schema.org/SportsClub",
      "@type": "rdfs:Class",
      "rdfs:comment": "A sports club.",
      "rdfs:label": "SportsClub",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SportsActivityLocation"
      }
    },
    {
      "@id": "http://schema.org/Aquarium",
      "@type": "rdfs:Class",
      "rdfs:comment": "Aquarium.",
      "rdfs:label": "Aquarium",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/OrderDelivered",
      "@type": "http://schema.org/OrderStatus",
      "rdfs:comment": "OrderStatus representing successful delivery of an order.",
      "rdfs:label": "OrderDelivered"
    },
    {
      "@id": "http://schema.org/validUntil",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Permit"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The date when the item is no longer valid.",
      "rdfs:label": "validUntil"
    },
    {
      "@id": "http://schema.org/TrainTrip",
      "@type": "rdfs:Class",
      "rdfs:comment": "A trip on a commercial train line.",
      "rdfs:label": "TrainTrip",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Trip"
      }
    },
    {
      "@id": "http://schema.org/Bridge",
      "@type": "rdfs:Class",
      "rdfs:comment": "A bridge.",
      "rdfs:label": "Bridge",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/TrainStation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A train station.",
      "rdfs:label": "TrainStation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/typeOfBed",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BedDetails"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/BedType"
        }
      ],
      "rdfs:comment": "The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity.",
      "rdfs:label": "typeOfBed"
    },
    {
      "@id": "http://schema.org/DatedMoneySpecification",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/MonetaryAmount"
      },
      "rdfs:comment": "A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. <strong>Note:</strong> This type has been superseded by <a class=\"localLink\" href=\"http://schema.org/MonetaryAmount\">MonetaryAmount</a> use of that type is recommended",
      "rdfs:label": "DatedMoneySpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/articleBody",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Article"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The actual body of the article.",
      "rdfs:label": "articleBody"
    },
    {
      "@id": "http://schema.org/familyName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property.",
      "rdfs:label": "familyName"
    },
    {
      "@id": "http://schema.org/fuelEfficiency",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).<br/><br/>\n\n<ul>\n<li>Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use <a class=\"localLink\" href=\"http://schema.org/unitText\">unitText</a> to indicate the unit of measurement, e.g. mpg or km/L.</li>\n<li>Note 2: There are two ways of indicating the fuel consumption, <a class=\"localLink\" href=\"http://schema.org/fuelConsumption\">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class=\"localLink\" href=\"http://schema.org/fuelEfficiency\">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li>\n<li>Note 3: Often, the absolute value is useful only when related to driving speed (\"at 80 km/h\") or usage pattern (\"city traffic\"). You can use <a class=\"localLink\" href=\"http://schema.org/valueReference\">valueReference</a> to link the value for the fuel economy to another value.</li>\n</ul>\n",
      "rdfs:label": "fuelEfficiency"
    },
    {
      "@id": "http://schema.org/PaymentDue",
      "@type": "http://schema.org/PaymentStatusType",
      "rdfs:comment": "The payment is due, but still within an acceptable time to be received.",
      "rdfs:label": "PaymentDue"
    },
    {
      "@id": "http://schema.org/track",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MusicGroup"
        },
        {
          "@id": "http://schema.org/MusicPlaylist"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MusicRecording"
        },
        {
          "@id": "http://schema.org/ItemList"
        }
      ],
      "rdfs:comment": "A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.",
      "rdfs:label": "track"
    },
    {
      "@id": "http://schema.org/seeks",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Demand"
      },
      "rdfs:comment": "A pointer to products or services sought by the organization or person (demand).",
      "rdfs:label": "seeks"
    },
    {
      "@id": "http://schema.org/member",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ProgramMembership"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/memberOf"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.",
      "rdfs:label": "member"
    },
    {
      "@id": "http://schema.org/touristType",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism"
        },
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it"
        }
      ],
      "http://schema.org/category": "issue-1810",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TouristDestination"
        },
        {
          "@id": "http://schema.org/TouristTrip"
        },
        {
          "@id": "http://schema.org/TouristAttraction"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Audience"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc.",
      "rdfs:label": "touristType"
    },
    {
      "@id": "http://schema.org/founders",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/founder"
      },
      "rdfs:comment": "A person who founded this organization.",
      "rdfs:label": "founders"
    },
    {
      "@id": "http://schema.org/Friday",
      "@type": "http://schema.org/DayOfWeek",
      "http://schema.org/sameAs": {
        "@id": "http://www.wikidata.org/entity/Q130"
      },
      "rdfs:comment": "The day of the week between Thursday and Saturday.",
      "rdfs:label": "Friday"
    },
    {
      "@id": "http://schema.org/suggestedMaxAge",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PeopleAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "Maximal age recommended for viewing content.",
      "rdfs:label": "suggestedMaxAge"
    },
    {
      "@id": "http://schema.org/yearlyRevenue",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BusinessAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The size of the business in annual revenue.",
      "rdfs:label": "yearlyRevenue"
    },
    {
      "@id": "http://schema.org/episodeNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Episode"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Integer"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Position of the episode within an ordered group of episodes.",
      "rdfs:label": "episodeNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/position"
      }
    },
    {
      "@id": "http://schema.org/temporal",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/DateTime"
        }
      ],
      "rdfs:comment": "The \"temporal\" property can be used in cases where more specific properties\n(e.g. <a class=\"localLink\" href=\"http://schema.org/temporalCoverage\">temporalCoverage</a>, <a class=\"localLink\" href=\"http://schema.org/dateCreated\">dateCreated</a>, <a class=\"localLink\" href=\"http://schema.org/dateModified\">dateModified</a>, <a class=\"localLink\" href=\"http://schema.org/datePublished\">datePublished</a>) are not known to be appropriate.",
      "rdfs:label": "temporal"
    },
    {
      "@id": "http://schema.org/ReserveAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "Reserving a concrete object.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/ScheduleAction\">ScheduleAction</a></a>: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.</li>\n</ul>\n",
      "rdfs:label": "ReserveAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlanAction"
      }
    },
    {
      "@id": "http://schema.org/WritePermission",
      "@type": "http://schema.org/DigitalDocumentPermissionType",
      "rdfs:comment": "Permission to write or edit the document.",
      "rdfs:label": "WritePermission"
    },
    {
      "@id": "http://schema.org/sibling",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A sibling of the person.",
      "rdfs:label": "sibling"
    },
    {
      "@id": "http://schema.org/requirements",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/softwareRequirements"
      },
      "rdfs:comment": "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).",
      "rdfs:label": "requirements"
    },
    {
      "@id": "http://schema.org/orderedItem",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Order"
        },
        {
          "@id": "http://schema.org/OrderItem"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/OrderItem"
        }
      ],
      "rdfs:comment": "The item ordered.",
      "rdfs:label": "orderedItem"
    },
    {
      "@id": "http://schema.org/PaymentService",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A Service to transfer funds from a person or organization to a beneficiary person or organization.",
      "rdfs:label": "PaymentService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialProduct"
      }
    },
    {
      "@id": "http://schema.org/SpeakableSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1389"
      },
      "http://schema.org/category": "issue-1389",
      "rdfs:comment": "A SpeakableSpecification indicates (typically via <a class=\"localLink\" href=\"http://schema.org/xpath\">xpath</a> or <a class=\"localLink\" href=\"http://schema.org/cssSelector\">cssSelector</a>) sections of a document that are highlighted as particularly <a class=\"localLink\" href=\"http://schema.org/speakable\">speakable</a>. Instances of this type are expected to be used primarily as values of the <a class=\"localLink\" href=\"http://schema.org/speakable\">speakable</a> property.",
      "rdfs:label": "SpeakableSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/lesser",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "rdfs:comment": "This ordering relation for qualitative values indicates that the subject is lesser than the object.",
      "rdfs:label": "lesser"
    },
    {
      "@id": "http://schema.org/playMode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/VideoGame"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/GamePlayMode"
      },
      "rdfs:comment": "Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.",
      "rdfs:label": "playMode"
    },
    {
      "@id": "http://schema.org/alumni",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/EducationalOrganization"
        }
      ],
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/alumniOf"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "Alumni of an organization.",
      "rdfs:label": "alumni"
    },
    {
      "@id": "http://schema.org/ProfessionalService",
      "@type": "rdfs:Class",
      "rdfs:comment": "Original definition: \"provider of professional services.\"<br/><br/>\n\nThe general <a class=\"localLink\" href=\"http://schema.org/ProfessionalService\">ProfessionalService</a> type for local businesses was deprecated due to confusion with <a class=\"localLink\" href=\"http://schema.org/Service\">Service</a>. For reference, the types that it included were: <a class=\"localLink\" href=\"http://schema.org/Dentist\">Dentist</a>,\n        <a class=\"localLink\" href=\"http://schema.org/AccountingService\">AccountingService</a>, <a class=\"localLink\" href=\"http://schema.org/Attorney\">Attorney</a>, <a class=\"localLink\" href=\"http://schema.org/Notary\">Notary</a>, as well as types for several kinds of <a class=\"localLink\" href=\"http://schema.org/HomeAndConstructionBusiness\">HomeAndConstructionBusiness</a>: <a class=\"localLink\" href=\"http://schema.org/Electrician\">Electrician</a>, <a class=\"localLink\" href=\"http://schema.org/GeneralContractor\">GeneralContractor</a>,\n        <a class=\"localLink\" href=\"http://schema.org/HousePainter\">HousePainter</a>, <a class=\"localLink\" href=\"http://schema.org/Locksmith\">Locksmith</a>, <a class=\"localLink\" href=\"http://schema.org/Plumber\">Plumber</a>, <a class=\"localLink\" href=\"http://schema.org/RoofingContractor\">RoofingContractor</a>. <a class=\"localLink\" href=\"http://schema.org/LegalService\">LegalService</a> was introduced as a more inclusive supertype of <a class=\"localLink\" href=\"http://schema.org/Attorney\">Attorney</a>.",
      "rdfs:label": "ProfessionalService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/dissolutionDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The date that this organization was dissolved.",
      "rdfs:label": "dissolutionDate"
    },
    {
      "@id": "http://schema.org/InteractAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of interacting with another person or organization.",
      "rdfs:label": "InteractAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/requiredMinAge",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PeopleAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "Audiences defined by a person's minimum age.",
      "rdfs:label": "requiredMinAge"
    },
    {
      "@id": "http://schema.org/AMRadioChannel",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1004"
      },
      "http://schema.org/category": "issue-1004",
      "rdfs:comment": "A radio channel that uses AM.",
      "rdfs:label": "AMRadioChannel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/RadioChannel"
      }
    },
    {
      "@id": "http://schema.org/arrivalStation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/TrainTrip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/TrainStation"
      },
      "rdfs:comment": "The station where the train trip ends.",
      "rdfs:label": "arrivalStation"
    },
    {
      "@id": "http://schema.org/AutoBodyShop",
      "@type": "rdfs:Class",
      "rdfs:comment": "Auto body shop.",
      "rdfs:label": "AutoBodyShop",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AutomotiveBusiness"
      }
    },
    {
      "@id": "http://schema.org/Permit",
      "@type": "rdfs:Class",
      "rdfs:comment": "A permit issued by an organization, e.g. a parking pass.",
      "rdfs:label": "Permit",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/LaserDiscFormat",
      "@type": "http://schema.org/MusicReleaseFormatType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "LaserDiscFormat.",
      "rdfs:label": "LaserDiscFormat"
    },
    {
      "@id": "http://schema.org/reviewCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AggregateRating"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The count of total number of reviews.",
      "rdfs:label": "reviewCount"
    },
    {
      "@id": "http://schema.org/contentUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "Actual bytes of the media object, for example the image file or video file.",
      "rdfs:label": "contentUrl"
    },
    {
      "@id": "http://schema.org/ConvenienceStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A convenience store.",
      "rdfs:label": "ConvenienceStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/School",
      "@type": "rdfs:Class",
      "rdfs:comment": "A school.",
      "rdfs:label": "School",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EducationalOrganization"
      }
    },
    {
      "@id": "http://schema.org/TelevisionStation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A television station.",
      "rdfs:label": "TelevisionStation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/exifData",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ImageObject"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/PropertyValue"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "exif data for this object.",
      "rdfs:label": "exifData"
    },
    {
      "@id": "http://schema.org/LakeBodyOfWater",
      "@type": "rdfs:Class",
      "rdfs:comment": "A lake (for example, Lake Pontrachain).",
      "rdfs:label": "LakeBodyOfWater",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BodyOfWater"
      }
    },
    {
      "@id": "http://schema.org/LowLactoseDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet appropriate for people with lactose intolerance.",
      "rdfs:label": "LowLactoseDiet"
    },
    {
      "@id": "http://schema.org/circle",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GeoShape"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.",
      "rdfs:label": "circle"
    },
    {
      "@id": "http://schema.org/BodyOfWater",
      "@type": "rdfs:Class",
      "rdfs:comment": "A body of water, such as a sea, ocean, or lake.",
      "rdfs:label": "BodyOfWater",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Landform"
      }
    },
    {
      "@id": "http://schema.org/availableLanguage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ServiceChannel"
        },
        {
          "@id": "http://schema.org/TouristAttraction"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        },
        {
          "@id": "http://schema.org/LodgingBusiness"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Language"
        }
      ],
      "rdfs:comment": "A language someone may use with or at the item, service or place. Please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>. See also <a class=\"localLink\" href=\"http://schema.org/inLanguage\">inLanguage</a>",
      "rdfs:label": "availableLanguage"
    },
    {
      "@id": "http://schema.org/performerIn",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "rdfs:comment": "Event that this person is a performer or participant in.",
      "rdfs:label": "performerIn"
    },
    {
      "@id": "http://schema.org/RadioSeries",
      "@type": "rdfs:Class",
      "rdfs:comment": "CreativeWorkSeries dedicated to radio broadcast and associated online delivery.",
      "rdfs:label": "RadioSeries",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWorkSeries"
      }
    },
    {
      "@id": "http://schema.org/MusicVideoObject",
      "@type": "rdfs:Class",
      "rdfs:comment": "A music video file.",
      "rdfs:label": "MusicVideoObject",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MediaObject"
      }
    },
    {
      "@id": "http://schema.org/question",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AskAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Question"
      },
      "rdfs:comment": "A sub property of object. A question.",
      "rdfs:label": "question",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/numberOfItems",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ItemList"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.",
      "rdfs:label": "numberOfItems"
    },
    {
      "@id": "http://schema.org/responsibilities",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Occupation"
        },
        {
          "@id": "http://schema.org/JobPosting"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Responsibilities associated with this role or Occupation.",
      "rdfs:label": "responsibilities"
    },
    {
      "@id": "http://schema.org/isGift",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "Was the offer accepted as a gift for someone other than the buyer.",
      "rdfs:label": "isGift"
    },
    {
      "@id": "http://schema.org/Beach",
      "@type": "rdfs:Class",
      "rdfs:comment": "Beach.",
      "rdfs:label": "Beach",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/SpreadsheetDigitalDocument",
      "@type": "rdfs:Class",
      "rdfs:comment": "A spreadsheet file.",
      "rdfs:label": "SpreadsheetDigitalDocument",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/DigitalDocument"
      }
    },
    {
      "@id": "http://schema.org/referencesOrder",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Invoice"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Order"
      },
      "rdfs:comment": "The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.",
      "rdfs:label": "referencesOrder"
    },
    {
      "@id": "http://schema.org/HowToItem",
      "@type": "rdfs:Class",
      "rdfs:comment": "An item used as either a tool or supply when performing the instructions for how to to achieve a result.",
      "rdfs:label": "HowToItem",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ListItem"
      }
    },
    {
      "@id": "http://schema.org/ShareAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of distributing content to people for their amusement or edification.",
      "rdfs:label": "ShareAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CommunicateAction"
      }
    },
    {
      "@id": "http://schema.org/validFrom",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Permit"
        },
        {
          "@id": "http://schema.org/MonetaryAmount"
        },
        {
          "@id": "http://schema.org/LocationFeatureSpecification"
        },
        {
          "@id": "http://schema.org/OpeningHoursSpecification"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/PriceSpecification"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date when the item becomes valid.",
      "rdfs:label": "validFrom"
    },
    {
      "@id": "http://schema.org/box",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GeoShape"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.",
      "rdfs:label": "box"
    },
    {
      "@id": "http://schema.org/sportsActivityLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ExerciseAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/SportsActivityLocation"
      },
      "rdfs:comment": "A sub property of location. The sports activity location where this action occurred.",
      "rdfs:label": "sportsActivityLocation",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/subReservation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ReservationPackage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "rdfs:comment": "The individual reservations included in the package. Typically a repeated property.",
      "rdfs:label": "subReservation"
    },
    {
      "@id": "http://schema.org/WPHeader",
      "@type": "rdfs:Class",
      "rdfs:comment": "The header section of the page.",
      "rdfs:label": "WPHeader",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPageElement"
      }
    },
    {
      "@id": "http://schema.org/device",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/availableOnDevice"
      },
      "rdfs:comment": "Device required to run the application. Used in cases where a specific make/model is required to run the application.",
      "rdfs:label": "device"
    },
    {
      "@id": "http://schema.org/LandmarksOrHistoricalBuildings",
      "@type": "rdfs:Class",
      "rdfs:comment": "An historical landmark or building.",
      "rdfs:label": "LandmarksOrHistoricalBuildings",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Place"
      }
    },
    {
      "@id": "http://schema.org/MarryAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of marrying a person.",
      "rdfs:label": "MarryAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/baseSalary",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/EmployeeRole"
        },
        {
          "@id": "http://schema.org/JobPosting"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MonetaryAmount"
        },
        {
          "@id": "http://schema.org/PriceSpecification"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The base salary of the job or of an employee in an EmployeeRole.",
      "rdfs:label": "baseSalary"
    },
    {
      "@id": "http://schema.org/foodEvent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CookAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/FoodEvent"
      },
      "rdfs:comment": "A sub property of location. The specific food event where the action occurred.",
      "rdfs:label": "foodEvent",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/accessibilityAPI",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Indicates that the resource is compatible with the referenced accessibility API (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).",
      "rdfs:label": "accessibilityAPI"
    },
    {
      "@id": "http://schema.org/Text",
      "@type": [
        "rdfs:Class",
        "http://schema.org/DataType"
      ],
      "rdfs:comment": "Data type: Text.",
      "rdfs:label": "Text"
    },
    {
      "@id": "http://schema.org/boardingPolicy",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Airline"
        },
        {
          "@id": "http://schema.org/Flight"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BoardingPolicyType"
      },
      "rdfs:comment": "The type of boarding policy used by the airline (e.g. zone-based or group-based).",
      "rdfs:label": "boardingPolicy"
    },
    {
      "@id": "http://schema.org/Notary",
      "@type": "rdfs:Class",
      "rdfs:comment": "A notary.",
      "rdfs:label": "Notary",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LegalService"
      }
    },
    {
      "@id": "http://schema.org/events",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/event"
      },
      "rdfs:comment": "Upcoming or past events associated with this place or organization.",
      "rdfs:label": "events"
    },
    {
      "@id": "http://schema.org/honorificPrefix",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.",
      "rdfs:label": "honorificPrefix"
    },
    {
      "@id": "http://schema.org/specialOpeningHoursSpecification",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/OpeningHoursSpecification"
      },
      "rdfs:comment": "The special opening hours of a certain place.<br/><br/>\n\nUse this to explicitly override general opening hours brought in scope by <a class=\"localLink\" href=\"http://schema.org/openingHoursSpecification\">openingHoursSpecification</a> or <a class=\"localLink\" href=\"http://schema.org/openingHours\">openingHours</a>.",
      "rdfs:label": "specialOpeningHoursSpecification"
    },
    {
      "@id": "http://schema.org/byArtist",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MusicAlbum"
        },
        {
          "@id": "http://schema.org/MusicRecording"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MusicGroup"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The artist that performed this album or recording.",
      "rdfs:label": "byArtist"
    },
    {
      "@id": "http://schema.org/ReactAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of responding instinctively and emotionally to an object, expressing a sentiment.",
      "rdfs:label": "ReactAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AssessAction"
      }
    },
    {
      "@id": "http://schema.org/isAccessoryOrSparePartFor",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Product"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Product"
      },
      "rdfs:comment": "A pointer to another product (or multiple products) for which this product is an accessory or spare part.",
      "rdfs:label": "isAccessoryOrSparePartFor"
    },
    {
      "@id": "http://schema.org/additionalName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An additional name for a Person, can be used for a middle name.",
      "rdfs:label": "additionalName"
    },
    {
      "@id": "http://schema.org/passengerSequenceNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FlightReservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The passenger's sequence number as assigned by the airline.",
      "rdfs:label": "passengerSequenceNumber"
    },
    {
      "@id": "http://schema.org/addressCountry",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/PostalAddress"
        },
        {
          "@id": "http://schema.org/GeoShape"
        },
        {
          "@id": "http://schema.org/GeoCoordinates"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Country"
        }
      ],
      "rdfs:comment": "The country. For example, USA. You can also provide the two-letter <a href=\"http://en.wikipedia.org/wiki/ISO_3166-1\">ISO 3166-1 alpha-2 country code</a>.",
      "rdfs:label": "addressCountry"
    },
    {
      "@id": "http://schema.org/toLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TransferAction"
        },
        {
          "@id": "http://schema.org/MoveAction"
        },
        {
          "@id": "http://schema.org/InsertAction"
        },
        {
          "@id": "http://schema.org/ExerciseAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "A sub property of location. The final location of the object or the agent after the action.",
      "rdfs:label": "toLocation",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/Message",
      "@type": "rdfs:Class",
      "rdfs:comment": "A single message from a sender to one or more organizations or people.",
      "rdfs:label": "Message",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/InvestmentOrDeposit",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.",
      "rdfs:label": "InvestmentOrDeposit",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialProduct"
      }
    },
    {
      "@id": "http://schema.org/DryCleaningOrLaundry",
      "@type": "rdfs:Class",
      "rdfs:comment": "A dry-cleaning business.",
      "rdfs:label": "DryCleaningOrLaundry",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/interactionStatistic",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.",
      "rdfs:label": "interactionStatistic"
    },
    {
      "@id": "http://schema.org/seatSection",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Seat"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The section location of the reserved seat (e.g. Orchestra).",
      "rdfs:label": "seatSection"
    },
    {
      "@id": "http://schema.org/DeactivateAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).",
      "rdfs:label": "DeactivateAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ControlAction"
      }
    },
    {
      "@id": "http://schema.org/validThrough",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/JobPosting"
        },
        {
          "@id": "http://schema.org/OpeningHoursSpecification"
        },
        {
          "@id": "http://schema.org/LocationFeatureSpecification"
        },
        {
          "@id": "http://schema.org/MonetaryAmount"
        },
        {
          "@id": "http://schema.org/PriceSpecification"
        },
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.",
      "rdfs:label": "validThrough"
    },
    {
      "@id": "http://schema.org/aircraft",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Vehicle"
        }
      ],
      "rdfs:comment": "The kind of aircraft (e.g., \"Boeing 747\").",
      "rdfs:label": "aircraft"
    },
    {
      "@id": "http://schema.org/recipient",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Message"
        },
        {
          "@id": "http://schema.org/SendAction"
        },
        {
          "@id": "http://schema.org/GiveAction"
        },
        {
          "@id": "http://schema.org/CommunicateAction"
        },
        {
          "@id": "http://schema.org/DonateAction"
        },
        {
          "@id": "http://schema.org/PayAction"
        },
        {
          "@id": "http://schema.org/AuthorizeAction"
        },
        {
          "@id": "http://schema.org/TipAction"
        },
        {
          "@id": "http://schema.org/ReturnAction"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Audience"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        }
      ],
      "rdfs:comment": "A sub property of participant. The participant who is at the receiving end of the action.",
      "rdfs:label": "recipient",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/FastFoodRestaurant",
      "@type": "rdfs:Class",
      "rdfs:comment": "A fast-food restaurant.",
      "rdfs:label": "FastFoodRestaurant",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/DataFeedItem",
      "@type": "rdfs:Class",
      "rdfs:comment": "A single item within a larger data feed.",
      "rdfs:label": "DataFeedItem",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/attendee",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "A person or organization attending the event.",
      "rdfs:label": "attendee"
    },
    {
      "@id": "http://schema.org/successorOf",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ProductModel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ProductModel"
      },
      "rdfs:comment": "A pointer from a newer variant of a product  to its previous, often discontinued predecessor.",
      "rdfs:label": "successorOf"
    },
    {
      "@id": "http://schema.org/collection",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UpdateAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/targetCollection"
      },
      "rdfs:comment": "A sub property of object. The collection target of the action.",
      "rdfs:label": "collection",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/OrderStatus",
      "@type": "rdfs:Class",
      "rdfs:comment": "Enumerated status values for Order.",
      "rdfs:label": "OrderStatus",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/SocialMediaPosting",
      "@type": "rdfs:Class",
      "rdfs:comment": "A post to a social media platform, including blog posts, tweets, Facebook posts, etc.",
      "rdfs:label": "SocialMediaPosting",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Article"
      }
    },
    {
      "@id": "http://schema.org/subjectOf",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1670"
      },
      "http://schema.org/category": "issue-1670",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/about"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Event"
        }
      ],
      "rdfs:comment": "A CreativeWork or Event about this Thing..",
      "rdfs:label": "subjectOf"
    },
    {
      "@id": "http://schema.org/siblings",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/sibling"
      },
      "rdfs:comment": "A sibling of the person.",
      "rdfs:label": "siblings"
    },
    {
      "@id": "http://schema.org/amenityFeature",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/LodgingBusiness"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Accommodation"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/LocationFeatureSpecification"
      },
      "rdfs:comment": "An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.",
      "rdfs:label": "amenityFeature"
    },
    {
      "@id": "http://schema.org/Park",
      "@type": "rdfs:Class",
      "rdfs:comment": "A park.",
      "rdfs:label": "Park",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/contentRating",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Rating"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Official rating of a piece of content&#x2014;for example,'MPAA PG-13'.",
      "rdfs:label": "contentRating"
    },
    {
      "@id": "http://schema.org/starRating",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/FoodEstablishment"
        },
        {
          "@id": "http://schema.org/LodgingBusiness"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Rating"
      },
      "rdfs:comment": "An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).",
      "rdfs:label": "starRating"
    },
    {
      "@id": "http://schema.org/applicationCategory",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "Type of software application, e.g. 'Game, Multimedia'.",
      "rdfs:label": "applicationCategory"
    },
    {
      "@id": "http://schema.org/geoRadius",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GeoCircle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Distance"
        }
      ],
      "rdfs:comment": "Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).",
      "rdfs:label": "geoRadius"
    },
    {
      "@id": "http://schema.org/VoteAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of expressing a preference from a fixed/finite/structured set of choices/options.",
      "rdfs:label": "VoteAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ChooseAction"
      }
    },
    {
      "@id": "http://schema.org/mainEntityOfPage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/mainEntity"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href=\"/docs/datamodel.html#mainEntityBackground\">background notes</a> for details.",
      "rdfs:label": "mainEntityOfPage"
    },
    {
      "@id": "http://schema.org/logo",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Brand"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/ImageObject"
        }
      ],
      "rdfs:comment": "An associated logo.",
      "rdfs:label": "logo",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/image"
      }
    },
    {
      "@id": "http://schema.org/BookFormatType",
      "@type": "rdfs:Class",
      "rdfs:comment": "The publication format of the book.",
      "rdfs:label": "BookFormatType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/AchieveAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.",
      "rdfs:label": "AchieveAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/lastReviewed",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "Date on which the content on this web page was last reviewed for accuracy and/or completeness.",
      "rdfs:label": "lastReviewed"
    },
    {
      "@id": "http://schema.org/Boolean",
      "@type": [
        "http://schema.org/DataType",
        "rdfs:Class"
      ],
      "rdfs:comment": "Boolean: True or False.",
      "rdfs:label": "Boolean"
    },
    {
      "@id": "http://schema.org/ItemListOrderType",
      "@type": "rdfs:Class",
      "rdfs:comment": "Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.",
      "rdfs:label": "ItemListOrderType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/Tuesday",
      "@type": "http://schema.org/DayOfWeek",
      "http://schema.org/sameAs": {
        "@id": "http://www.wikidata.org/entity/Q127"
      },
      "rdfs:comment": "The day of the week between Monday and Wednesday.",
      "rdfs:label": "Tuesday"
    },
    {
      "@id": "http://schema.org/ComedyClub",
      "@type": "rdfs:Class",
      "rdfs:comment": "A comedy club.",
      "rdfs:label": "ComedyClub",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EntertainmentBusiness"
      }
    },
    {
      "@id": "http://schema.org/ServiceChannel",
      "@type": "rdfs:Class",
      "rdfs:comment": "A means for accessing a service, e.g. a government office location, web site, or phone number.",
      "rdfs:label": "ServiceChannel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/requiredCollateral",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LoanOrCredit"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Thing"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)",
      "rdfs:label": "requiredCollateral"
    },
    {
      "@id": "http://schema.org/ExhibitionEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...",
      "rdfs:label": "ExhibitionEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/isVariantOf",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ProductModel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ProductModel"
      },
      "rdfs:comment": "A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive.",
      "rdfs:label": "isVariantOf"
    },
    {
      "@id": "http://schema.org/readonlyValue",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a \"hidden\" input in an HTML form.",
      "rdfs:label": "readonlyValue"
    },
    {
      "@id": "http://schema.org/numberOfAxles",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The number of axles.<br/><br/>\n\nTypical unit code(s): C62",
      "rdfs:label": "numberOfAxles"
    },
    {
      "@id": "http://schema.org/RentAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.",
      "rdfs:label": "RentAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/sharedContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SocialMediaPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "A CreativeWork such as an image, video, or audio clip shared as part of this posting.",
      "rdfs:label": "sharedContent"
    },
    {
      "@id": "http://schema.org/EmployeeRole",
      "@type": "rdfs:Class",
      "rdfs:comment": "A subclass of OrganizationRole used to describe employee relationships.",
      "rdfs:label": "EmployeeRole",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/OrganizationRole"
      }
    },
    {
      "@id": "http://schema.org/price",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/PriceSpecification"
        },
        {
          "@id": "http://schema.org/TradeAction"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.<br/><br/>\n\nUsage guidelines:<br/><br/>\n\n<ul>\n<li>Use the <a class=\"localLink\" href=\"http://schema.org/priceCurrency\">priceCurrency</a> property (with standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\") instead of including <a href=\"http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign\">ambiguous symbols</a> such as '$' in the value.</li>\n<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n<li>Note that both <a href=\"http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute\">RDFa</a> and Microdata syntax allow the use of a \"content=\" attribute for publishing simple machine-readable values alongside more human-friendly formatting.</li>\n<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n</ul>\n",
      "rdfs:label": "price"
    },
    {
      "@id": "http://schema.org/EmploymentAgency",
      "@type": "rdfs:Class",
      "rdfs:comment": "An employment agency.",
      "rdfs:label": "EmploymentAgency",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/PrependAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of inserting at the beginning if an ordered collection.",
      "rdfs:label": "PrependAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InsertAction"
      }
    },
    {
      "@id": "http://schema.org/hiringOrganization",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "Organization offering the job position.",
      "rdfs:label": "hiringOrganization"
    },
    {
      "@id": "http://schema.org/numberOfSeasons",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of seasons in this series.",
      "rdfs:label": "numberOfSeasons"
    },
    {
      "@id": "http://schema.org/FireStation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A fire station. With firemen.",
      "rdfs:label": "FireStation",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/CivicStructure"
        },
        {
          "@id": "http://schema.org/EmergencyService"
        }
      ]
    },
    {
      "@id": "http://schema.org/CourseInstance",
      "@type": "rdfs:Class",
      "rdfs:comment": "An instance of a <a class=\"localLink\" href=\"http://schema.org/Course\">Course</a> which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.",
      "rdfs:label": "CourseInstance",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/valueMinLength",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "Specifies the minimum allowed range for number of characters in a literal value.",
      "rdfs:label": "valueMinLength"
    },
    {
      "@id": "http://schema.org/Hotel",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "Hotel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LodgingBusiness"
      }
    },
    {
      "@id": "http://schema.org/IndividualProduct",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A single, identifiable product instance (e.g. a laptop with a particular serial number).",
      "rdfs:label": "IndividualProduct",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Product"
      }
    },
    {
      "@id": "http://schema.org/Book",
      "@type": "rdfs:Class",
      "rdfs:comment": "A book.",
      "rdfs:label": "Book",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/dropoffTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/RentalCarReservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "When a rental car can be dropped off.",
      "rdfs:label": "dropoffTime"
    },
    {
      "@id": "http://schema.org/workPerformed",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "A work performed in some event, for example a play performed in a TheaterEvent.",
      "rdfs:label": "workPerformed",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/workFeatured"
      }
    },
    {
      "@id": "http://schema.org/serviceSmsNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ServiceChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ContactPoint"
      },
      "rdfs:comment": "The number to access the service by text message.",
      "rdfs:label": "serviceSmsNumber"
    },
    {
      "@id": "http://schema.org/RadioClip",
      "@type": "rdfs:Class",
      "rdfs:comment": "A short radio program or a segment/part of a radio program.",
      "rdfs:label": "RadioClip",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Clip"
      }
    },
    {
      "@id": "http://schema.org/Intangible",
      "@type": "rdfs:Class",
      "rdfs:comment": "A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.",
      "rdfs:label": "Intangible",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Thing"
      }
    },
    {
      "@id": "http://schema.org/ElectronicsStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "An electronics store.",
      "rdfs:label": "ElectronicsStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/eventStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/EventStatusType"
      },
      "rdfs:comment": "An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.",
      "rdfs:label": "eventStatus"
    },
    {
      "@id": "http://schema.org/gtin14",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The GTIN-14 code of the product, or the product to which the offer refers. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details.",
      "rdfs:label": "gtin14",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/gtin13",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details.",
      "rdfs:label": "gtin13",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/gtin12",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details.",
      "rdfs:label": "gtin12",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/OfflineTemporarily",
      "@type": "http://schema.org/GameServerStatus",
      "rdfs:comment": "Game server status: OfflineTemporarily. Server is offline now but it can be online soon.",
      "rdfs:label": "OfflineTemporarily"
    },
    {
      "@id": "http://schema.org/employees",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/employee"
      },
      "rdfs:comment": "People working for this organization.",
      "rdfs:label": "employees"
    },
    {
      "@id": "http://schema.org/learningResourceType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.",
      "rdfs:label": "learningResourceType"
    },
    {
      "@id": "http://schema.org/Order",
      "@type": "rdfs:Class",
      "rdfs:comment": "An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.",
      "rdfs:label": "Order",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/suitableForDiet",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MenuItem"
        },
        {
          "@id": "http://schema.org/Recipe"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/RestrictedDiet"
      },
      "rdfs:comment": "Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.",
      "rdfs:label": "suitableForDiet"
    },
    {
      "@id": "http://schema.org/creditedTo",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRelease"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to \"Stefani Germanotta Band\", but by Lady Gaga.",
      "rdfs:label": "creditedTo"
    },
    {
      "@id": "http://schema.org/valueReference",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/PropertyValue"
        },
        {
          "@id": "http://schema.org/QualitativeValue"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QualitativeValue"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/StructuredValue"
        },
        {
          "@id": "http://schema.org/PropertyValue"
        },
        {
          "@id": "http://schema.org/Enumeration"
        }
      ],
      "rdfs:comment": "A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.",
      "rdfs:label": "valueReference"
    },
    {
      "@id": "http://schema.org/EventScheduled",
      "@type": "http://schema.org/EventStatusType",
      "rdfs:comment": "The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default.",
      "rdfs:label": "EventScheduled"
    },
    {
      "@id": "http://schema.org/accessMode",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1100"
      },
      "http://schema.org/category": "issue-1110",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.",
      "rdfs:label": "accessMode"
    },
    {
      "@id": "http://schema.org/TVClip",
      "@type": "rdfs:Class",
      "rdfs:comment": "A short TV program or a segment/part of a TV program.",
      "rdfs:label": "TVClip",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Clip"
      }
    },
    {
      "@id": "http://schema.org/NailSalon",
      "@type": "rdfs:Class",
      "rdfs:comment": "A nail salon.",
      "rdfs:label": "NailSalon",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HealthAndBeautyBusiness"
      }
    },
    {
      "@id": "http://schema.org/startDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWorkSeries"
        },
        {
          "@id": "http://schema.org/Role"
        },
        {
          "@id": "http://schema.org/DatedMoneySpecification"
        },
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Date"
        },
        {
          "@id": "http://schema.org/DateTime"
        }
      ],
      "rdfs:comment": "The start date and time of the item (in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>).",
      "rdfs:label": "startDate"
    },
    {
      "@id": "http://schema.org/telephone",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The telephone number.",
      "rdfs:label": "telephone"
    },
    {
      "@id": "http://schema.org/realEstateAgent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/RentAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/RealEstateAgent"
      },
      "rdfs:comment": "A sub property of participant. The real estate agent involved in the action.",
      "rdfs:label": "realEstateAgent",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/ContactPoint",
      "@type": "rdfs:Class",
      "rdfs:comment": "A contact point&#x2014;for example, a Customer Complaints department.",
      "rdfs:label": "ContactPoint",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/mainContentOfPage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/WebPageElement"
      },
      "rdfs:comment": "Indicates if this web page element is the main subject of the page.",
      "rdfs:label": "mainContentOfPage"
    },
    {
      "@id": "http://schema.org/GeneralContractor",
      "@type": "rdfs:Class",
      "rdfs:comment": "A general contractor.",
      "rdfs:label": "GeneralContractor",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HomeAndConstructionBusiness"
      }
    },
    {
      "@id": "http://schema.org/PreSale",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item is available for ordering and delivery before general availability.",
      "rdfs:label": "PreSale"
    },
    {
      "@id": "http://schema.org/serviceUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ServiceChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "The website to access the service.",
      "rdfs:label": "serviceUrl"
    },
    {
      "@id": "http://schema.org/director",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/VideoObject"
        },
        {
          "@id": "http://schema.org/VideoGame"
        },
        {
          "@id": "http://schema.org/Episode"
        },
        {
          "@id": "http://schema.org/Clip"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/Movie"
        },
        {
          "@id": "http://schema.org/MovieSeries"
        },
        {
          "@id": "http://schema.org/TVSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.",
      "rdfs:label": "director"
    },
    {
      "@id": "http://schema.org/InStock",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item is in stock.",
      "rdfs:label": "InStock"
    },
    {
      "@id": "http://schema.org/transcript",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/VideoObject"
        },
        {
          "@id": "http://schema.org/AudioObject"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "If this MediaObject is an AudioObject or VideoObject, the transcript of that object.",
      "rdfs:label": "transcript"
    },
    {
      "@id": "http://schema.org/TelevisionChannel",
      "@type": "rdfs:Class",
      "rdfs:comment": "A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.",
      "rdfs:label": "TelevisionChannel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BroadcastChannel"
      }
    },
    {
      "@id": "http://schema.org/softwareVersion",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Version of the software instance.",
      "rdfs:label": "softwareVersion"
    },
    {
      "@id": "http://schema.org/providesBroadcastService",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastChannel"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/hasBroadcastChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "rdfs:comment": "The BroadcastService offered on this channel.",
      "rdfs:label": "providesBroadcastService"
    },
    {
      "@id": "http://schema.org/superEvent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/subEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "rdfs:comment": "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.",
      "rdfs:label": "superEvent"
    },
    {
      "@id": "http://schema.org/material",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "rdfs:comment": "A material that something is made from, e.g. leather, wool, cotton, paper.",
      "rdfs:label": "material"
    },
    {
      "@id": "http://schema.org/GovernmentBuilding",
      "@type": "rdfs:Class",
      "rdfs:comment": "A government building.",
      "rdfs:label": "GovernmentBuilding",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/EmergencyService",
      "@type": "rdfs:Class",
      "rdfs:comment": "An emergency service, such as a fire station or ER.",
      "rdfs:label": "EmergencyService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/issuedBy",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Ticket"
        },
        {
          "@id": "http://schema.org/Permit"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The organization issuing the ticket or permit.",
      "rdfs:label": "issuedBy"
    },
    {
      "@id": "http://schema.org/email",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Email address.",
      "rdfs:label": "email"
    },
    {
      "@id": "http://schema.org/albumRelease",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicAlbum"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/releaseOf"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicRelease"
      },
      "rdfs:comment": "A release of this album.",
      "rdfs:label": "albumRelease"
    },
    {
      "@id": "http://schema.org/FinancialService",
      "@type": "rdfs:Class",
      "rdfs:comment": "Financial services business.",
      "rdfs:label": "FinancialService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/VideoObject",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      },
      "rdfs:comment": "A video file.",
      "rdfs:label": "VideoObject",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MediaObject"
      }
    },
    {
      "@id": "http://schema.org/potentialAction",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Action"
      },
      "rdfs:comment": "Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.",
      "rdfs:label": "potentialAction"
    },
    {
      "@id": "http://schema.org/isFamilyFriendly",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "Indicates whether this content is family friendly.",
      "rdfs:label": "isFamilyFriendly"
    },
    {
      "@id": "http://schema.org/weight",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The weight of the product or person.",
      "rdfs:label": "weight"
    },
    {
      "@id": "http://schema.org/Menu",
      "@type": "rdfs:Class",
      "rdfs:comment": "A structured representation of food or drink items available from a FoodEstablishment.",
      "rdfs:label": "Menu",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/Periodical",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://www.w3.org/2002/07/owl#equivalentClass": {
        "@id": "http://purl.org/ontology/bibo/Periodical"
      },
      "rdfs:comment": "A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.<br/><br/>\n\nSee also <a href=\"http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html\">blog post</a>.",
      "rdfs:label": "Periodical",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWorkSeries"
      }
    },
    {
      "@id": "http://schema.org/broadcastOfEvent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "rdfs:comment": "The event being broadcast such as a sporting event or awards ceremony.",
      "rdfs:label": "broadcastOfEvent"
    },
    {
      "@id": "http://schema.org/numberOfBeds",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BedDetails"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment.",
      "rdfs:label": "numberOfBeds"
    },
    {
      "@id": "http://schema.org/MovieSeries",
      "@type": "rdfs:Class",
      "rdfs:comment": "A series of movies. Included movies can be indicated with the hasPart property.",
      "rdfs:label": "MovieSeries",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWorkSeries"
      }
    },
    {
      "@id": "http://schema.org/Series",
      "@type": "rdfs:Class",
      "rdfs:comment": "A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also <a class=\"localLink\" href=\"http://schema.org/CreativeWorkSeries\">CreativeWorkSeries</a>, <a class=\"localLink\" href=\"http://schema.org/EventSeries\">EventSeries</a>.",
      "rdfs:label": "Series",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/buyer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SellAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A sub property of participant. The participant/person/organization that bought the object.",
      "rdfs:label": "buyer",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/Electrician",
      "@type": "rdfs:Class",
      "rdfs:comment": "An electrician.",
      "rdfs:label": "Electrician",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HomeAndConstructionBusiness"
      }
    },
    {
      "@id": "http://schema.org/reviewedBy",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "People or organizations that have reviewed the content on this web page for accuracy and/or completeness.",
      "rdfs:label": "reviewedBy"
    },
    {
      "@id": "http://schema.org/printSection",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NewsArticle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "If this NewsArticle appears in print, this field indicates the print section in which the article appeared.",
      "rdfs:label": "printSection"
    },
    {
      "@id": "http://schema.org/WarrantyScope",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.<br/><br/>\n\nCommonly used values:<br/><br/>\n\n<ul>\n<li>http://purl.org/goodrelations/v1#Labor-BringIn</li>\n<li>http://purl.org/goodrelations/v1#PartsAndLabor-BringIn</li>\n<li>http://purl.org/goodrelations/v1#PartsAndLabor-PickUp</li>\n</ul>\n",
      "rdfs:label": "WarrantyScope",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/httpMethod",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EntryPoint"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.",
      "rdfs:label": "httpMethod"
    },
    {
      "@id": "http://schema.org/CollectionPage",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web page type: Collection page.",
      "rdfs:label": "CollectionPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/PhotographAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of capturing still images of objects using a camera.",
      "rdfs:label": "PhotographAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreateAction"
      }
    },
    {
      "@id": "http://schema.org/vehicleInteriorType",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.",
      "rdfs:label": "vehicleInteriorType"
    },
    {
      "@id": "http://schema.org/relevantOccupation",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Occupation"
      },
      "rdfs:comment": "The Occupation for the JobPosting.",
      "rdfs:label": "relevantOccupation"
    },
    {
      "@id": "http://schema.org/performTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HowToDirection"
        },
        {
          "@id": "http://schema.org/HowTo"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.",
      "rdfs:label": "performTime"
    },
    {
      "@id": "http://schema.org/HealthAndBeautyBusiness",
      "@type": "rdfs:Class",
      "rdfs:comment": "Health and beauty.",
      "rdfs:label": "HealthAndBeautyBusiness",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/LegislativeBuilding",
      "@type": "rdfs:Class",
      "rdfs:comment": "A legislative building&#x2014;for example, the state capitol.",
      "rdfs:label": "LegislativeBuilding",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/GovernmentBuilding"
      }
    },
    {
      "@id": "http://schema.org/exampleOfWork",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/workExample"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "A creative work that this work is an example/instance/realization/derivation of.",
      "rdfs:label": "exampleOfWork"
    },
    {
      "@id": "http://schema.org/UserCheckins",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserCheckins",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/opens",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OpeningHoursSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Time"
      },
      "rdfs:comment": "The opening hour of the place or service on the given day(s) of the week.",
      "rdfs:label": "opens"
    },
    {
      "@id": "http://schema.org/version",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The version of the CreativeWork embodied by a specified resource.",
      "rdfs:label": "version"
    },
    {
      "@id": "http://schema.org/paymentMethod",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Order"
        },
        {
          "@id": "http://schema.org/Invoice"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/PaymentMethod"
      },
      "rdfs:comment": "The name of the credit card or other method of payment for the order.",
      "rdfs:label": "paymentMethod"
    },
    {
      "@id": "http://schema.org/dateModified",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/DataFeedItem"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Date"
        },
        {
          "@id": "http://schema.org/DateTime"
        }
      ],
      "rdfs:comment": "The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.",
      "rdfs:label": "dateModified"
    },
    {
      "@id": "http://schema.org/VideoGameSeries",
      "@type": "rdfs:Class",
      "rdfs:comment": "A video game series.",
      "rdfs:label": "VideoGameSeries",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWorkSeries"
      }
    },
    {
      "@id": "http://schema.org/associatedArticle",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/NewsArticle"
      },
      "rdfs:comment": "A NewsArticle associated with the Media Object.",
      "rdfs:label": "associatedArticle"
    },
    {
      "@id": "http://schema.org/keywords",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.",
      "rdfs:label": "keywords"
    },
    {
      "@id": "http://schema.org/productionCompany",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MovieSeries"
        },
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/Episode"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/MediaObject"
        },
        {
          "@id": "http://schema.org/Movie"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The production company or studio responsible for the item e.g. series, video game, episode etc.",
      "rdfs:label": "productionCompany"
    },
    {
      "@id": "http://schema.org/WearAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of dressing oneself in clothing.",
      "rdfs:label": "WearAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UseAction"
      }
    },
    {
      "@id": "http://schema.org/TravelAgency",
      "@type": "rdfs:Class",
      "rdfs:comment": "A travel agency.",
      "rdfs:label": "TravelAgency",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/PerformingGroup",
      "@type": "rdfs:Class",
      "rdfs:comment": "A performance group, such as a band, an orchestra, or a circus.",
      "rdfs:label": "PerformingGroup",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/Hostel",
      "@type": "rdfs:Class",
      "rdfs:comment": "A hostel - cheap accommodation, often in shared dormitories.\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "Hostel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LodgingBusiness"
      }
    },
    {
      "@id": "http://schema.org/deliveryMethod",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ReceiveAction"
        },
        {
          "@id": "http://schema.org/TrackAction"
        },
        {
          "@id": "http://schema.org/OrderAction"
        },
        {
          "@id": "http://schema.org/SendAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DeliveryMethod"
      },
      "rdfs:comment": "A sub property of instrument. The method of delivery.",
      "rdfs:label": "deliveryMethod",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/instrument"
      }
    },
    {
      "@id": "http://schema.org/endorsee",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EndorseAction"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "A sub property of participant. The person/organization being supported.",
      "rdfs:label": "endorsee",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/alignmentType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AlignmentObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A category of alignment between the learning resource and the framework node. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationalLevel'.",
      "rdfs:label": "alignmentType"
    },
    {
      "@id": "http://schema.org/assemblyVersion",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/APIReference"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Associated product/technology version. e.g., .NET Framework 4.5.",
      "rdfs:label": "assemblyVersion"
    },
    {
      "@id": "http://schema.org/branchOf",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LocalBusiness"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/parentOrganization"
      },
      "rdfs:comment": "The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)<a class=\"localLink\" href=\"http://schema.org/branch\">branch</a>.",
      "rdfs:label": "branchOf"
    },
    {
      "@id": "http://schema.org/programName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ProgramMembership"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The program providing the membership.",
      "rdfs:label": "programName"
    },
    {
      "@id": "http://schema.org/Quantity",
      "@type": "rdfs:Class",
      "rdfs:comment": "Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.",
      "rdfs:label": "Quantity",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/AllWheelDriveConfiguration",
      "@type": "http://schema.org/DriveWheelConfigurationValue",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "All-wheel Drive is a transmission layout where the engine drives all four wheels.",
      "rdfs:label": "AllWheelDriveConfiguration"
    },
    {
      "@id": "http://schema.org/geo",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeoShape"
        },
        {
          "@id": "http://schema.org/GeoCoordinates"
        }
      ],
      "rdfs:comment": "The geo coordinates of the place.",
      "rdfs:label": "geo"
    },
    {
      "@id": "http://schema.org/VideoGallery",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web page type: Video gallery page.",
      "rdfs:label": "VideoGallery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CollectionPage"
      }
    },
    {
      "@id": "http://schema.org/EducationalAudience",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass"
      },
      "rdfs:comment": "An EducationalAudience.",
      "rdfs:label": "EducationalAudience",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Audience"
      }
    },
    {
      "@id": "http://schema.org/department",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.",
      "rdfs:label": "department"
    },
    {
      "@id": "http://schema.org/targetUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AlignmentObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "The URL of a node in an established educational framework.",
      "rdfs:label": "targetUrl"
    },
    {
      "@id": "http://schema.org/CityHall",
      "@type": "rdfs:Class",
      "rdfs:comment": "A city hall.",
      "rdfs:label": "CityHall",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/GovernmentBuilding"
      }
    },
    {
      "@id": "http://schema.org/ReservationCancelled",
      "@type": "http://schema.org/ReservationStatusType",
      "rdfs:comment": "The status for a previously confirmed reservation that is now cancelled.",
      "rdfs:label": "ReservationCancelled"
    },
    {
      "@id": "http://schema.org/carbohydrateContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of grams of carbohydrates.",
      "rdfs:label": "carbohydrateContent"
    },
    {
      "@id": "http://schema.org/ComedyEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Comedy event.",
      "rdfs:label": "ComedyEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/isSimilarTo",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Service"
        }
      ],
      "rdfs:comment": "A pointer to another, functionally similar product (or multiple products).",
      "rdfs:label": "isSimilarTo"
    },
    {
      "@id": "http://schema.org/DonateAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of providing goods, services, or money without compensation, often for philanthropic reasons.",
      "rdfs:label": "DonateAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/closes",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OpeningHoursSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Time"
      },
      "rdfs:comment": "The closing hour of the place or service on the given day(s) of the week.",
      "rdfs:label": "closes"
    },
    {
      "@id": "http://schema.org/Brand",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A brand is a name used by an organization or business person for labeling a product, product group, or similar.",
      "rdfs:label": "Brand",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/MovingCompany",
      "@type": "rdfs:Class",
      "rdfs:comment": "A moving company.",
      "rdfs:label": "MovingCompany",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HomeAndConstructionBusiness"
      }
    },
    {
      "@id": "http://schema.org/Question",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange"
      },
      "rdfs:comment": "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.",
      "rdfs:label": "Question",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/ZoneBoardingPolicy",
      "@type": "http://schema.org/BoardingPolicyType",
      "rdfs:comment": "The airline boards by zones of the plane.",
      "rdfs:label": "ZoneBoardingPolicy"
    },
    {
      "@id": "http://schema.org/storageRequirements",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Storage requirements (free space required).",
      "rdfs:label": "storageRequirements"
    },
    {
      "@id": "http://schema.org/BorrowAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/LendAction\">LendAction</a>: Reciprocal of BorrowAction.</li>\n</ul>\n",
      "rdfs:label": "BorrowAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TransferAction"
      }
    },
    {
      "@id": "http://schema.org/GardenStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A garden store.",
      "rdfs:label": "GardenStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/estimatedCost",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HowToSupply"
        },
        {
          "@id": "http://schema.org/HowTo"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/MonetaryAmount"
        }
      ],
      "rdfs:comment": "The estimated cost of the supply or supplies consumed when performing instructions.",
      "rdfs:label": "estimatedCost"
    },
    {
      "@id": "http://schema.org/contactPoint",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HealthInsurancePlan"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ContactPoint"
      },
      "rdfs:comment": "A contact point for a person or organization.",
      "rdfs:label": "contactPoint"
    },
    {
      "@id": "http://schema.org/genre",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/MusicGroup"
        },
        {
          "@id": "http://schema.org/BroadcastChannel"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "Genre of the creative work, broadcast channel or group.",
      "rdfs:label": "genre"
    },
    {
      "@id": "http://schema.org/volumeNumber",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PublicationVolume"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Integer"
        }
      ],
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/ontology/bibo/volume"
      },
      "rdfs:comment": "Identifies the volume of publication or multi-part work; for example, \"iii\" or \"2\".",
      "rdfs:label": "volumeNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/position"
      }
    },
    {
      "@id": "http://schema.org/requiredGender",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PeopleAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Audiences defined by a person's gender.",
      "rdfs:label": "requiredGender"
    },
    {
      "@id": "http://schema.org/ReviewAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.",
      "rdfs:label": "ReviewAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AssessAction"
      }
    },
    {
      "@id": "http://schema.org/maxValue",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/PropertyValue"
        },
        {
          "@id": "http://schema.org/PropertyValueSpecification"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/MonetaryAmount"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The upper value of some characteristic or property.",
      "rdfs:label": "maxValue"
    },
    {
      "@id": "http://schema.org/UserComments",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "rdfs:comment": "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>.",
      "rdfs:label": "UserComments",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UserInteraction"
      }
    },
    {
      "@id": "http://schema.org/NewCondition",
      "@type": "http://schema.org/OfferItemCondition",
      "rdfs:comment": "Indicates that the item is new.",
      "rdfs:label": "NewCondition"
    },
    {
      "@id": "http://schema.org/parentOrganization",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/subOrganization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The larger organization that this organization is a <a class=\"localLink\" href=\"http://schema.org/subOrganization\">subOrganization</a> of, if any.",
      "rdfs:label": "parentOrganization"
    },
    {
      "@id": "http://schema.org/PaintAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of producing a painting, typically with paint and canvas as instruments.",
      "rdfs:label": "PaintAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreateAction"
      }
    },
    {
      "@id": "http://schema.org/Blog",
      "@type": "rdfs:Class",
      "rdfs:comment": "A blog.",
      "rdfs:label": "Blog",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/duration",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/QuantitativeValueDistribution"
        },
        {
          "@id": "http://schema.org/MusicRecording"
        },
        {
          "@id": "http://schema.org/Movie"
        },
        {
          "@id": "http://schema.org/MediaObject"
        },
        {
          "@id": "http://schema.org/MusicRelease"
        },
        {
          "@id": "http://schema.org/Audiobook"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "The duration of the item (movie, audio recording, event, etc.) in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>.",
      "rdfs:label": "duration"
    },
    {
      "@id": "http://schema.org/SportsActivityLocation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A sports location, such as a playing field.",
      "rdfs:label": "SportsActivityLocation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/acceptedAnswer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Question"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Answer"
        },
        {
          "@id": "http://schema.org/ItemList"
        }
      ],
      "rdfs:comment": "The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author.",
      "rdfs:label": "acceptedAnswer",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/suggestedAnswer"
      }
    },
    {
      "@id": "http://schema.org/WarrantyPromise",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.",
      "rdfs:label": "WarrantyPromise",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/EmployerAggregateRating",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1689"
      },
      "http://schema.org/category": "issue-1689",
      "rdfs:comment": "An aggregate rating of an Organization related to its role as an employer.",
      "rdfs:label": "EmployerAggregateRating",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AggregateRating"
      }
    },
    {
      "@id": "http://schema.org/fromLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MoveAction"
        },
        {
          "@id": "http://schema.org/ExerciseAction"
        },
        {
          "@id": "http://schema.org/TransferAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "A sub property of location. The original location of the object or the agent before the action.",
      "rdfs:label": "fromLocation",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/Event",
      "@type": "rdfs:Class",
      "http://www.w3.org/2002/07/owl#equivalentClass": {
        "@id": "http://purl.org/dc/dcmitype/Event"
      },
      "rdfs:comment": "An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the <a class=\"localLink\" href=\"http://schema.org/offers\">offers</a> property. Repeated events may be structured as separate Event objects.",
      "rdfs:label": "Event",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Thing"
      }
    },
    {
      "@id": "http://schema.org/mainEntity",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/mainEntityOfPage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "Indicates the primary entity described in some page or other CreativeWork.",
      "rdfs:label": "mainEntity",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/about"
      }
    },
    {
      "@id": "http://schema.org/hostingOrganization",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ProgramMembership"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The organization (airline, travelers' club, etc.) the membership is made with.",
      "rdfs:label": "hostingOrganization"
    },
    {
      "@id": "http://schema.org/arrivalTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Trip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The expected arrival time.",
      "rdfs:label": "arrivalTime"
    },
    {
      "@id": "http://schema.org/CompilationAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "CompilationAlbum.",
      "rdfs:label": "CompilationAlbum"
    },
    {
      "@id": "http://schema.org/StudioAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "StudioAlbum.",
      "rdfs:label": "StudioAlbum"
    },
    {
      "@id": "http://schema.org/hasDigitalDocumentPermission",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DigitalDocument"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DigitalDocumentPermission"
      },
      "rdfs:comment": "A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to \"public\".",
      "rdfs:label": "hasDigitalDocumentPermission"
    },
    {
      "@id": "http://schema.org/programmingModel",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/APIReference"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Indicates whether API is managed or unmanaged.",
      "rdfs:label": "programmingModel"
    },
    {
      "@id": "http://schema.org/colleague",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A colleague of the person.",
      "rdfs:label": "colleague"
    },
    {
      "@id": "http://schema.org/House",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see <a href=\"http://en.wikipedia.org/wiki/House\">http://en.wikipedia.org/wiki/House</a>).",
      "rdfs:label": "House",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Accommodation"
      }
    },
    {
      "@id": "http://schema.org/applicationSuite",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The name of the application suite to which the application belongs (e.g. Excel belongs to Office).",
      "rdfs:label": "applicationSuite"
    },
    {
      "@id": "http://schema.org/educationalRole",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EducationalAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An educationalRole of an EducationalAudience.",
      "rdfs:label": "educationalRole"
    },
    {
      "@id": "http://schema.org/encodesCreativeWork",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/encoding"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "The CreativeWork encoded by this media object.",
      "rdfs:label": "encodesCreativeWork"
    },
    {
      "@id": "http://schema.org/seller",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Order"
        },
        {
          "@id": "http://schema.org/BuyAction"
        },
        {
          "@id": "http://schema.org/Flight"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.",
      "rdfs:label": "seller",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/AdultEntertainment",
      "@type": "rdfs:Class",
      "rdfs:comment": "An adult entertainment establishment.",
      "rdfs:label": "AdultEntertainment",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EntertainmentBusiness"
      }
    },
    {
      "@id": "http://schema.org/interactionCount",
      "@type": "rdf:Property",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/interactionStatistic"
      },
      "rdfs:comment": "This property is deprecated, alongside the UserInteraction types on which it depended.",
      "rdfs:label": "interactionCount"
    },
    {
      "@id": "http://schema.org/author",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Rating"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.",
      "rdfs:label": "author"
    },
    {
      "@id": "http://schema.org/DriveWheelConfigurationValue",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "A value indicating which roadwheels will receive torque.",
      "rdfs:label": "DriveWheelConfigurationValue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/QualitativeValue"
      }
    },
    {
      "@id": "http://schema.org/Role",
      "@type": "rdfs:Class",
      "rdfs:comment": "Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.<br/><br/>\n\nSee also <a href=\"http://blog.schema.org/2014/06/introducing-role.html\">blog post</a>.",
      "rdfs:label": "Role",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/LowCalorieDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet focused on reduced calorie intake.",
      "rdfs:label": "LowCalorieDiet"
    },
    {
      "@id": "http://schema.org/RearWheelDriveConfiguration",
      "@type": "http://schema.org/DriveWheelConfigurationValue",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "Real-wheel drive is a transmission layout where the engine drives the rear wheels.",
      "rdfs:label": "RearWheelDriveConfiguration"
    },
    {
      "@id": "http://schema.org/targetName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AlignmentObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The name of a node in an established educational framework.",
      "rdfs:label": "targetName"
    },
    {
      "@id": "http://schema.org/dataset",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DataCatalog"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/includedInDataCatalog"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Dataset"
      },
      "rdfs:comment": "A dataset contained in this catalog.",
      "rdfs:label": "dataset"
    },
    {
      "@id": "http://schema.org/City",
      "@type": "rdfs:Class",
      "rdfs:comment": "A city or town.",
      "rdfs:label": "City",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AdministrativeArea"
      }
    },
    {
      "@id": "http://schema.org/recipeCuisine",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The cuisine of the recipe (for example, French or Ethiopian).",
      "rdfs:label": "recipeCuisine"
    },
    {
      "@id": "http://schema.org/ConsumeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of ingesting information/resources/food.",
      "rdfs:label": "ConsumeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/ScreeningEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "A screening of a movie or other video.",
      "rdfs:label": "ScreeningEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/legalName",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The official name of the organization, e.g. the registered company name.",
      "rdfs:label": "legalName"
    },
    {
      "@id": "http://schema.org/LimitedAvailability",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item has limited availability.",
      "rdfs:label": "LimitedAvailability"
    },
    {
      "@id": "http://schema.org/specialCommitments",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.",
      "rdfs:label": "specialCommitments"
    },
    {
      "@id": "http://schema.org/ticketToken",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Ticket"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance.",
      "rdfs:label": "ticketToken"
    },
    {
      "@id": "http://schema.org/ArriveAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.",
      "rdfs:label": "ArriveAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MoveAction"
      }
    },
    {
      "@id": "http://schema.org/cookTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "The time it takes to actually cook the dish, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.",
      "rdfs:label": "cookTime",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/performTime"
      }
    },
    {
      "@id": "http://schema.org/knownVehicleDamages",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A textual description of known damages, both repaired and unrepaired.",
      "rdfs:label": "knownVehicleDamages"
    },
    {
      "@id": "http://schema.org/occupationalCategory",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/JobPosting"
        },
        {
          "@id": "http://schema.org/Occupation"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value.",
      "rdfs:label": "occupationalCategory"
    },
    {
      "@id": "http://schema.org/securityScreening",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FlightReservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The type of security screening the passenger is subject to.",
      "rdfs:label": "securityScreening"
    },
    {
      "@id": "http://schema.org/addressRegion",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PostalAddress"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The region. For example, CA.",
      "rdfs:label": "addressRegion"
    },
    {
      "@id": "http://schema.org/EventCancelled",
      "@type": "http://schema.org/EventStatusType",
      "rdfs:comment": "The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event's cancelled date(s).",
      "rdfs:label": "EventCancelled"
    },
    {
      "@id": "http://schema.org/object",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Action"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read <em>a book</em>.",
      "rdfs:label": "object"
    },
    {
      "@id": "http://schema.org/assembly",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/APIReference"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/executableLibraryName"
      },
      "rdfs:comment": "Library file name e.g., mscorlib.dll, system.web.dll.",
      "rdfs:label": "assembly"
    },
    {
      "@id": "http://schema.org/geoCovers",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. \"Every point of b is a point of (the interior or boundary of) a\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.",
      "rdfs:label": "geoCovers"
    },
    {
      "@id": "http://schema.org/CreateAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of deliberately creating/producing/generating/building a result out of the agent.",
      "rdfs:label": "CreateAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/ScheduleAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "Scheduling future actions, events, or tasks.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/ReserveAction\">ReserveAction</a>: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.</li>\n</ul>\n",
      "rdfs:label": "ScheduleAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PlanAction"
      }
    },
    {
      "@id": "http://schema.org/Dentist",
      "@type": "rdfs:Class",
      "rdfs:comment": "A dentist.",
      "rdfs:label": "Dentist",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/MedicalOrganization"
        },
        {
          "@id": "http://schema.org/MedicalBusiness"
        },
        {
          "@id": "http://schema.org/LocalBusiness"
        }
      ]
    },
    {
      "@id": "http://schema.org/DiscoverAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of discovering/finding an object.",
      "rdfs:label": "DiscoverAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FindAction"
      }
    },
    {
      "@id": "http://schema.org/encodings",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MediaObject"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/encoding"
      },
      "rdfs:comment": "A media object that encodes this CreativeWork.",
      "rdfs:label": "encodings"
    },
    {
      "@id": "http://schema.org/EndorsementRating",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1293"
      },
      "http://schema.org/category": "issue-1293",
      "rdfs:comment": "An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a \"critic's pick\" blog, a\n\"Like\" or \"+1\" on a social network. It can be considered the <a class=\"localLink\" href=\"http://schema.org/result\">result</a> of an <a class=\"localLink\" href=\"http://schema.org/EndorseAction\">EndorseAction</a> in which the <a class=\"localLink\" href=\"http://schema.org/object\">object</a> of the action is rated positively by\nsome <a class=\"localLink\" href=\"http://schema.org/agent\">agent</a>. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>.<br/><br/>\n\nAn <a class=\"localLink\" href=\"http://schema.org/EndorsementRating\">EndorsementRating</a> may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive,\nendorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.",
      "rdfs:label": "EndorsementRating",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Rating"
      }
    },
    {
      "@id": "http://schema.org/memoryRequirements",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Minimum memory requirements.",
      "rdfs:label": "memoryRequirements"
    },
    {
      "@id": "http://schema.org/numberOfAirbags",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The number or type of airbags in the vehicle.",
      "rdfs:label": "numberOfAirbags"
    },
    {
      "@id": "http://schema.org/Reservoir",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.",
      "rdfs:label": "Reservoir",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BodyOfWater"
      }
    },
    {
      "@id": "http://schema.org/MusicEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Music event.",
      "rdfs:label": "MusicEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/Store",
      "@type": "rdfs:Class",
      "rdfs:comment": "A retail good store.",
      "rdfs:label": "Store",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/MonetaryAmount",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "rdfs:comment": "A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use <a class=\"localLink\" href=\"http://schema.org/PriceSpecification\">PriceSpecification</a> Types to describe the price of an Offer, Invoice, etc.",
      "rdfs:label": "MonetaryAmount",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/paymentMethodId",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Invoice"
        },
        {
          "@id": "http://schema.org/Order"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An identifier for the method of payment used (e.g. the last 4 digits of the credit card).",
      "rdfs:label": "paymentMethodId"
    },
    {
      "@id": "http://schema.org/HairSalon",
      "@type": "rdfs:Class",
      "rdfs:comment": "A hair salon.",
      "rdfs:label": "HairSalon",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HealthAndBeautyBusiness"
      }
    },
    {
      "@id": "http://schema.org/isBasedOnUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/isBasedOn"
      },
      "rdfs:comment": "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.",
      "rdfs:label": "isBasedOnUrl"
    },
    {
      "@id": "http://schema.org/ownedThrough",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OwnershipInfo"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date and time of giving up ownership on the product.",
      "rdfs:label": "ownedThrough"
    },
    {
      "@id": "http://schema.org/webCheckinTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The time when a passenger can check into the flight online.",
      "rdfs:label": "webCheckinTime"
    },
    {
      "@id": "http://schema.org/DaySpa",
      "@type": "rdfs:Class",
      "rdfs:comment": "A day spa.",
      "rdfs:label": "DaySpa",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HealthAndBeautyBusiness"
      }
    },
    {
      "@id": "http://schema.org/alternativeHeadline",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A secondary title of the CreativeWork.",
      "rdfs:label": "alternativeHeadline"
    },
    {
      "@id": "http://schema.org/mealService",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Description of the meals that will be provided or available for purchase.",
      "rdfs:label": "mealService"
    },
    {
      "@id": "http://schema.org/EngineSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "rdfs:comment": "Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.",
      "rdfs:label": "EngineSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/printPage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NewsArticle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).",
      "rdfs:label": "printPage"
    },
    {
      "@id": "http://schema.org/discusses",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UserComments"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "Specifies the CreativeWork associated with the UserComment.",
      "rdfs:label": "discusses"
    },
    {
      "@id": "http://schema.org/parentItem",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Comment"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Question"
      },
      "rdfs:comment": "The parent of a question, answer or item in general.",
      "rdfs:label": "parentItem"
    },
    {
      "@id": "http://schema.org/messageAttachment",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Message"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "A CreativeWork attached to the message.",
      "rdfs:label": "messageAttachment"
    },
    {
      "@id": "http://schema.org/ActivateAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).",
      "rdfs:label": "ActivateAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ControlAction"
      }
    },
    {
      "@id": "http://schema.org/timeRequired",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'.",
      "rdfs:label": "timeRequired"
    },
    {
      "@id": "http://schema.org/numberOfPages",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Book"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of pages in the book.",
      "rdfs:label": "numberOfPages"
    },
    {
      "@id": "http://schema.org/geoEquals",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>. \"Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other\" (a symmetric relationship)",
      "rdfs:label": "geoEquals"
    },
    {
      "@id": "http://schema.org/RadioEpisode",
      "@type": "rdfs:Class",
      "rdfs:comment": "A radio episode which can be part of a series or season.",
      "rdfs:label": "RadioEpisode",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Episode"
      }
    },
    {
      "@id": "http://schema.org/ElementarySchool",
      "@type": "rdfs:Class",
      "rdfs:comment": "An elementary school.",
      "rdfs:label": "ElementarySchool",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EducationalOrganization"
      }
    },
    {
      "@id": "http://schema.org/translator",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Event"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.",
      "rdfs:label": "translator"
    },
    {
      "@id": "http://schema.org/discount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Any discount applied (to an Order).",
      "rdfs:label": "discount"
    },
    {
      "@id": "http://schema.org/ReplaceAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of editing a recipient by replacing an old object with a new object.",
      "rdfs:label": "ReplaceAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/UpdateAction"
      }
    },
    {
      "@id": "http://schema.org/CreditCard",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
        },
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
        }
      ],
      "rdfs:comment": "A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.<br/><br/>\n\nCommonly used values:<br/><br/>\n\n<ul>\n<li>http://purl.org/goodrelations/v1#AmericanExpress</li>\n<li>http://purl.org/goodrelations/v1#DinersClub</li>\n<li>http://purl.org/goodrelations/v1#Discover</li>\n<li>http://purl.org/goodrelations/v1#JCB</li>\n<li>http://purl.org/goodrelations/v1#MasterCard</li>\n<li>http://purl.org/goodrelations/v1#VISA</li>\n</ul>\n",
      "rdfs:label": "CreditCard",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/LoanOrCredit"
        },
        {
          "@id": "http://schema.org/PaymentCard"
        }
      ]
    },
    {
      "@id": "http://schema.org/OpeningHoursSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A structured value providing information about the opening hours of a place or a certain service inside a place.<br/><br/>\n\nThe place is <strong>open</strong> if the <a class=\"localLink\" href=\"http://schema.org/opens\">opens</a> property is specified, and <strong>closed</strong> otherwise.<br/><br/>\n\nIf the value for the <a class=\"localLink\" href=\"http://schema.org/closes\">closes</a> property is less than the value for the <a class=\"localLink\" href=\"http://schema.org/opens\">opens</a> property then the hour range is assumed to span over the next day.",
      "rdfs:label": "OpeningHoursSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/valueName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name.",
      "rdfs:label": "valueName"
    },
    {
      "@id": "http://schema.org/pageStart",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/PublicationVolume"
        },
        {
          "@id": "http://schema.org/PublicationIssue"
        },
        {
          "@id": "http://schema.org/Chapter"
        },
        {
          "@id": "http://schema.org/Article"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Integer"
        }
      ],
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/ontology/bibo/pageStart"
      },
      "rdfs:comment": "The page on which the work starts; for example \"135\" or \"xiii\".",
      "rdfs:label": "pageStart"
    },
    {
      "@id": "http://schema.org/servicePhone",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ServiceChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ContactPoint"
      },
      "rdfs:comment": "The phone number to use to access the service.",
      "rdfs:label": "servicePhone"
    },
    {
      "@id": "http://schema.org/additionalNumberOfGuests",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/RsvpAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "If responding yes, the number of guests who will attend in addition to the invitee.",
      "rdfs:label": "additionalNumberOfGuests"
    },
    {
      "@id": "http://schema.org/DislikeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.",
      "rdfs:label": "DislikeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ReactAction"
      }
    },
    {
      "@id": "http://schema.org/PlayAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/ListenAction\">ListenAction</a>: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/WatchAction\">WatchAction</a>: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.</li>\n</ul>\n",
      "rdfs:label": "PlayAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/BankOrCreditUnion",
      "@type": "rdfs:Class",
      "rdfs:comment": "Bank or credit union.",
      "rdfs:label": "BankOrCreditUnion",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialService"
      }
    },
    {
      "@id": "http://schema.org/deliveryLeadTime",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.",
      "rdfs:label": "deliveryLeadTime"
    },
    {
      "@id": "http://schema.org/FAQPage",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1723"
      },
      "http://schema.org/category": "issue-1723",
      "rdfs:comment": "A <a class=\"localLink\" href=\"http://schema.org/FAQPage\">FAQPage</a> is a <a class=\"localLink\" href=\"http://schema.org/WebPage\">WebPage</a> presenting one or more \"<a href=\"https://en.wikipedia.org/wiki/FAQ\">Frequently asked questions</a>\" (see also <a class=\"localLink\" href=\"http://schema.org/QAPage\">QAPage</a>).",
      "rdfs:label": "FAQPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/issuedThrough",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Permit"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Service"
      },
      "rdfs:comment": "The service through with the permit was granted.",
      "rdfs:label": "issuedThrough"
    },
    {
      "@id": "http://schema.org/TieAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of reaching a draw in a competitive activity.",
      "rdfs:label": "TieAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AchieveAction"
      }
    },
    {
      "@id": "http://schema.org/minimumPaymentDue",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Invoice"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/PriceSpecification"
        },
        {
          "@id": "http://schema.org/MonetaryAmount"
        }
      ],
      "rdfs:comment": "The minimum payment required at this time.",
      "rdfs:label": "minimumPaymentDue"
    },
    {
      "@id": "http://schema.org/Corporation",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      },
      "rdfs:comment": "Organization: A business corporation.",
      "rdfs:label": "Corporation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/suggestedGender",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PeopleAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The gender of the person or audience.",
      "rdfs:label": "suggestedGender"
    },
    {
      "@id": "http://schema.org/proteinContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of grams of protein.",
      "rdfs:label": "proteinContent"
    },
    {
      "@id": "http://schema.org/wordCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Article"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of words in the text of the Article.",
      "rdfs:label": "wordCount"
    },
    {
      "@id": "http://schema.org/ItemList",
      "@type": "rdfs:Class",
      "rdfs:comment": "A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.",
      "rdfs:label": "ItemList",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/DeliveryMethod",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.<br/><br/>\n\nCommonly used values:<br/><br/>\n\n<ul>\n<li>http://purl.org/goodrelations/v1#DeliveryModeDirectDownload</li>\n<li>http://purl.org/goodrelations/v1#DeliveryModeFreight</li>\n<li>http://purl.org/goodrelations/v1#DeliveryModeMail</li>\n<li>http://purl.org/goodrelations/v1#DeliveryModeOwnFleet</li>\n<li>http://purl.org/goodrelations/v1#DeliveryModePickUp</li>\n<li>http://purl.org/goodrelations/v1#DHL</li>\n<li>http://purl.org/goodrelations/v1#FederalExpress</li>\n<li>http://purl.org/goodrelations/v1#UPS</li>\n</ul>\n",
      "rdfs:label": "DeliveryMethod",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/Winery",
      "@type": "rdfs:Class",
      "rdfs:comment": "A winery.",
      "rdfs:label": "Winery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/InformAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of notifying someone of information pertinent to them, with no expectation of a response.",
      "rdfs:label": "InformAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CommunicateAction"
      }
    },
    {
      "@id": "http://schema.org/paymentAccepted",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LocalBusiness"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.",
      "rdfs:label": "paymentAccepted"
    },
    {
      "@id": "http://schema.org/screenshot",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/ImageObject"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "A link to a screenshot image of the app.",
      "rdfs:label": "screenshot"
    },
    {
      "@id": "http://schema.org/availabilityEnds",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
        },
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
        }
      ],
      "http://schema.org/category": "issue-1741",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/ActionAccessSpecification"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The end of the availability of the product or service included in the offer.",
      "rdfs:label": "availabilityEnds"
    },
    {
      "@id": "http://schema.org/requiredMaxAge",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PeopleAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "Audiences defined by a person's maximum age.",
      "rdfs:label": "requiredMaxAge"
    },
    {
      "@id": "http://schema.org/ReturnAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).",
      "rdfs:label": "ReturnAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TransferAction"
      }
    },
    {
      "@id": "http://schema.org/MeetingRoom",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see <a href=\"http://en.wikipedia.org/wiki/Conference_hall\">http://en.wikipedia.org/wiki/Conference_hall</a>).\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "MeetingRoom",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Room"
      }
    },
    {
      "@id": "http://schema.org/sodiumContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of milligrams of sodium.",
      "rdfs:label": "sodiumContent"
    },
    {
      "@id": "http://schema.org/model",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Product"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/ProductModel"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.",
      "rdfs:label": "model"
    },
    {
      "@id": "http://schema.org/vehicleSeatingCapacity",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.<br/><br/>\n\nTypical unit code(s): C62 for persons.",
      "rdfs:label": "vehicleSeatingCapacity"
    },
    {
      "@id": "http://schema.org/SeatingMap",
      "@type": "http://schema.org/MapCategoryType",
      "rdfs:comment": "A seating map.",
      "rdfs:label": "SeatingMap"
    },
    {
      "@id": "http://schema.org/MonetaryAmountDistribution",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "rdfs:comment": "A statistical distribution of monetary amounts.",
      "rdfs:label": "MonetaryAmountDistribution",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/QuantitativeValueDistribution"
      }
    },
    {
      "@id": "http://schema.org/StadiumOrArena",
      "@type": "rdfs:Class",
      "rdfs:comment": "A stadium.",
      "rdfs:label": "StadiumOrArena",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/CivicStructure"
        },
        {
          "@id": "http://schema.org/SportsActivityLocation"
        }
      ]
    },
    {
      "@id": "http://schema.org/JoinAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent joins an event/group with participants/friends at a location.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/RegisterAction\">RegisterAction</a>: Unlike RegisterAction, JoinAction refers to joining a group/team of people.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/SubscribeAction\">SubscribeAction</a>: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/FollowAction\">FollowAction</a>: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.</li>\n</ul>\n",
      "rdfs:label": "JoinAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/OrderInTransit",
      "@type": "http://schema.org/OrderStatus",
      "rdfs:comment": "OrderStatus representing that an order is in transit.",
      "rdfs:label": "OrderInTransit"
    },
    {
      "@id": "http://schema.org/orderDelivery",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Order"
        },
        {
          "@id": "http://schema.org/OrderItem"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "rdfs:comment": "The delivery of the parcel related to this order or order item.",
      "rdfs:label": "orderDelivery"
    },
    {
      "@id": "http://schema.org/RiverBodyOfWater",
      "@type": "rdfs:Class",
      "rdfs:comment": "A river (for example, the broad majestic Shannon).",
      "rdfs:label": "RiverBodyOfWater",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BodyOfWater"
      }
    },
    {
      "@id": "http://schema.org/color",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Product"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The color of the product.",
      "rdfs:label": "color"
    },
    {
      "@id": "http://schema.org/DJMixAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "DJMixAlbum.",
      "rdfs:label": "DJMixAlbum"
    },
    {
      "@id": "http://schema.org/SearchAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of searching for an object.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/FindAction\">FindAction</a>: SearchAction generally leads to a FindAction, but not necessarily.</li>\n</ul>\n",
      "rdfs:label": "SearchAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/HVACBusiness",
      "@type": "rdfs:Class",
      "rdfs:comment": "A business that provide Heating, Ventilation and Air Conditioning services.",
      "rdfs:label": "HVACBusiness",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HomeAndConstructionBusiness"
      }
    },
    {
      "@id": "http://schema.org/TaxiStand",
      "@type": "rdfs:Class",
      "rdfs:comment": "A taxi stand.",
      "rdfs:label": "TaxiStand",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/ProductModel",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A datasheet or vendor specification of a product (in the sense of a prototypical description).",
      "rdfs:label": "ProductModel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Product"
      }
    },
    {
      "@id": "http://schema.org/CatholicChurch",
      "@type": "rdfs:Class",
      "rdfs:comment": "A Catholic church.",
      "rdfs:label": "CatholicChurch",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Church"
      }
    },
    {
      "@id": "http://schema.org/containedInPlace",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/containsPlace"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The basic containment relation between a place and one that contains it.",
      "rdfs:label": "containedInPlace"
    },
    {
      "@id": "http://schema.org/serviceOperator",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GovernmentService"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.",
      "rdfs:label": "serviceOperator"
    },
    {
      "@id": "http://schema.org/MovieClip",
      "@type": "rdfs:Class",
      "rdfs:comment": "A short segment/part of a movie.",
      "rdfs:label": "MovieClip",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Clip"
      }
    },
    {
      "@id": "http://schema.org/ActionStatusType",
      "@type": "rdfs:Class",
      "rdfs:comment": "The status of an Action.",
      "rdfs:label": "ActionStatusType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/WriteAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of authoring written creative content.",
      "rdfs:label": "WriteAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreateAction"
      }
    },
    {
      "@id": "http://schema.org/MusicAlbumProductionType",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "Classification of the album by it's type of content: soundtrack, live album, studio album, etc.",
      "rdfs:label": "MusicAlbumProductionType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/experienceRequirements",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Occupation"
        },
        {
          "@id": "http://schema.org/JobPosting"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Description of skills and experience needed for the position or Occupation.",
      "rdfs:label": "experienceRequirements"
    },
    {
      "@id": "http://schema.org/ApplyAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of registering to an organization/service without the guarantee to receive it.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/RegisterAction\">RegisterAction</a>: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.</li>\n</ul>\n",
      "rdfs:label": "ApplyAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/OrganizeAction"
      }
    },
    {
      "@id": "http://schema.org/countriesSupported",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
      "rdfs:label": "countriesSupported"
    },
    {
      "@id": "http://schema.org/DigitalFormat",
      "@type": "http://schema.org/MusicReleaseFormatType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "DigitalFormat.",
      "rdfs:label": "DigitalFormat"
    },
    {
      "@id": "http://schema.org/CDFormat",
      "@type": "http://schema.org/MusicReleaseFormatType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "CDFormat.",
      "rdfs:label": "CDFormat"
    },
    {
      "@id": "http://schema.org/foundingDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The date that this organization was founded.",
      "rdfs:label": "foundingDate"
    },
    {
      "@id": "http://schema.org/departureGate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Identifier of the flight's departure gate.",
      "rdfs:label": "departureGate"
    },
    {
      "@id": "http://schema.org/isRelatedTo",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Service"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "rdfs:comment": "A pointer to another, somehow related product (or multiple products).",
      "rdfs:label": "isRelatedTo"
    },
    {
      "@id": "http://schema.org/worstRating",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Rating"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.",
      "rdfs:label": "worstRating"
    },
    {
      "@id": "http://schema.org/thumbnailUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "A thumbnail image relevant to the Thing.",
      "rdfs:label": "thumbnailUrl"
    },
    {
      "@id": "http://schema.org/availableChannel",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Service"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ServiceChannel"
      },
      "rdfs:comment": "A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).",
      "rdfs:label": "availableChannel"
    },
    {
      "@id": "http://schema.org/hasMenuItem",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Menu"
        },
        {
          "@id": "http://schema.org/MenuSection"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MenuItem"
      },
      "rdfs:comment": "A food or drink item contained in a menu or menu section.",
      "rdfs:label": "hasMenuItem"
    },
    {
      "@id": "http://schema.org/broadcaster",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BroadcastService"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "The organization owning or operating the broadcast service.",
      "rdfs:label": "broadcaster"
    },
    {
      "@id": "http://schema.org/firstPerformance",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "rdfs:comment": "The date and place the work was first performed.",
      "rdfs:label": "firstPerformance"
    },
    {
      "@id": "http://schema.org/Locksmith",
      "@type": "rdfs:Class",
      "rdfs:comment": "A locksmith.",
      "rdfs:label": "Locksmith",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HomeAndConstructionBusiness"
      }
    },
    {
      "@id": "http://schema.org/Landform",
      "@type": "rdfs:Class",
      "rdfs:comment": "A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.",
      "rdfs:label": "Landform",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Place"
      }
    },
    {
      "@id": "http://schema.org/Discontinued",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item has been discontinued.",
      "rdfs:label": "Discontinued"
    },
    {
      "@id": "http://schema.org/seatNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Seat"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The location of the reserved seat (e.g., 27).",
      "rdfs:label": "seatNumber"
    },
    {
      "@id": "http://schema.org/hasPart",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/isPartOf"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).",
      "rdfs:label": "hasPart"
    },
    {
      "@id": "http://schema.org/Episode",
      "@type": "rdfs:Class",
      "rdfs:comment": "A media episode (e.g. TV, radio, video game) which can be part of a series or season.",
      "rdfs:label": "Episode",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/OceanBodyOfWater",
      "@type": "rdfs:Class",
      "rdfs:comment": "An ocean (for example, the Pacific).",
      "rdfs:label": "OceanBodyOfWater",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BodyOfWater"
      }
    },
    {
      "@id": "http://schema.org/MedicalOrganization",
      "@type": "rdfs:Class",
      "rdfs:comment": "A medical organization (physical or not), such as hospital, institution or clinic.",
      "rdfs:label": "MedicalOrganization",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/employee",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "Someone working for this organization.",
      "rdfs:label": "employee"
    },
    {
      "@id": "http://schema.org/warrantyPromise",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/BuyAction"
        },
        {
          "@id": "http://schema.org/SellAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/WarrantyPromise"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/warranty"
      },
      "rdfs:comment": "The warranty promise(s) included in the offer.",
      "rdfs:label": "warrantyPromise"
    },
    {
      "@id": "http://schema.org/contactType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ContactPoint"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.",
      "rdfs:label": "contactType"
    },
    {
      "@id": "http://schema.org/productID",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Product"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The product identifier, such as ISBN. For example: <code>meta itemprop=\"productID\" content=\"isbn:123-456-789\"</code>.",
      "rdfs:label": "productID",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/TrainReservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservation for train travel.<br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class=\"localLink\" href=\"http://schema.org/Offer\">Offer</a>.",
      "rdfs:label": "TrainReservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/passengerPriorityStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FlightReservation"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QualitativeValue"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority).",
      "rdfs:label": "passengerPriorityStatus"
    },
    {
      "@id": "http://schema.org/Online",
      "@type": "http://schema.org/GameServerStatus",
      "rdfs:comment": "Game server status: Online. Server is available.",
      "rdfs:label": "Online"
    },
    {
      "@id": "http://schema.org/MusicVenue",
      "@type": "rdfs:Class",
      "rdfs:comment": "A music venue.",
      "rdfs:label": "MusicVenue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/transFatContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of grams of trans fat.",
      "rdfs:label": "transFatContent"
    },
    {
      "@id": "http://schema.org/comment",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/RsvpAction"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Comment"
      },
      "rdfs:comment": "Comments, typically from users.",
      "rdfs:label": "comment"
    },
    {
      "@id": "http://schema.org/targetCollection",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UpdateAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "A sub property of object. The collection target of the action.",
      "rdfs:label": "targetCollection",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/nonEqual",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "rdfs:comment": "This ordering relation for qualitative values indicates that the subject is not equal to the object.",
      "rdfs:label": "nonEqual"
    },
    {
      "@id": "http://schema.org/numberOfEmployees",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/BusinessAudience"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The number of employees in an organization e.g. business.",
      "rdfs:label": "numberOfEmployees"
    },
    {
      "@id": "http://schema.org/naics",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The North American Industry Classification System (NAICS) code for a particular organization or business person.",
      "rdfs:label": "naics"
    },
    {
      "@id": "http://schema.org/hasPOS",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "Points-of-Sales operated by the organization or person.",
      "rdfs:label": "hasPOS"
    },
    {
      "@id": "http://schema.org/Museum",
      "@type": "rdfs:Class",
      "rdfs:comment": "A museum.",
      "rdfs:label": "Museum",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/dateReceived",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Message"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date/time the message was received if a single recipient exists.",
      "rdfs:label": "dateReceived"
    },
    {
      "@id": "http://schema.org/previousItem",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ListItem"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ListItem"
      },
      "rdfs:comment": "A link to the ListItem that preceeds the current one.",
      "rdfs:label": "previousItem"
    },
    {
      "@id": "http://schema.org/PostalAddress",
      "@type": "rdfs:Class",
      "rdfs:comment": "The mailing address.",
      "rdfs:label": "PostalAddress",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ContactPoint"
      }
    },
    {
      "@id": "http://schema.org/totalTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HowToDirection"
        },
        {
          "@id": "http://schema.org/HowTo"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "The total time required to perform instructions or a direction (including time to prepare the supplies), in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.",
      "rdfs:label": "totalTime"
    },
    {
      "@id": "http://schema.org/parent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A parent of this person.",
      "rdfs:label": "parent"
    },
    {
      "@id": "http://schema.org/softwareHelp",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "Software application help.",
      "rdfs:label": "softwareHelp"
    },
    {
      "@id": "http://schema.org/entertainmentBusiness",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PerformAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/EntertainmentBusiness"
      },
      "rdfs:comment": "A sub property of location. The entertainment business where the action occurred.",
      "rdfs:label": "entertainmentBusiness",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/ClaimReview",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1061"
      },
      "http://schema.org/category": "issue-1061",
      "rdfs:comment": "A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).",
      "rdfs:label": "ClaimReview",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Review"
      }
    },
    {
      "@id": "http://schema.org/ConfirmAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of notifying someone that a future event/action is going to happen as expected.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/CancelAction\">CancelAction</a>: The antonym of ConfirmAction.</li>\n</ul>\n",
      "rdfs:label": "ConfirmAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InformAction"
      }
    },
    {
      "@id": "http://schema.org/representativeOfPage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ImageObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "Indicates whether this image is representative of the content of the page.",
      "rdfs:label": "representativeOfPage"
    },
    {
      "@id": "http://schema.org/CollegeOrUniversity",
      "@type": "rdfs:Class",
      "rdfs:comment": "A college, university, or other third-level educational institution.",
      "rdfs:label": "CollegeOrUniversity",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EducationalOrganization"
      }
    },
    {
      "@id": "http://schema.org/inLanguage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CommunicateAction"
        },
        {
          "@id": "http://schema.org/WriteAction"
        },
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/LinkRole"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Language"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The language of the content or performance or used in an action. Please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>. See also <a class=\"localLink\" href=\"http://schema.org/availableLanguage\">availableLanguage</a>.",
      "rdfs:label": "inLanguage"
    },
    {
      "@id": "http://schema.org/previousStartDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.",
      "rdfs:label": "previousStartDate"
    },
    {
      "@id": "http://schema.org/SoftwareSourceCode",
      "@type": "rdfs:Class",
      "rdfs:comment": "Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.",
      "rdfs:label": "SoftwareSourceCode",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/expectedArrivalUntil",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ParcelDelivery"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The latest date the package may arrive.",
      "rdfs:label": "expectedArrivalUntil"
    },
    {
      "@id": "http://schema.org/Clip",
      "@type": "rdfs:Class",
      "rdfs:comment": "A short TV or radio program or a segment/part of a program.",
      "rdfs:label": "Clip",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/Seat",
      "@type": "rdfs:Class",
      "rdfs:comment": "Used to describe a seat, such as a reserved seat in an event reservation.",
      "rdfs:label": "Seat",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/OnlineFull",
      "@type": "http://schema.org/GameServerStatus",
      "rdfs:comment": "Game server status: OnlineFull. Server is online but unavailable. The maximum number of players has reached.",
      "rdfs:label": "OnlineFull"
    },
    {
      "@id": "http://schema.org/softwareAddOn",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "rdfs:comment": "Additional content for a software application.",
      "rdfs:label": "softwareAddOn"
    },
    {
      "@id": "http://schema.org/checkoutTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/LodgingBusiness"
        },
        {
          "@id": "http://schema.org/LodgingReservation"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The latest someone may check out of a lodging establishment.",
      "rdfs:label": "checkoutTime"
    },
    {
      "@id": "http://schema.org/OnlineOnly",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item is available only online.",
      "rdfs:label": "OnlineOnly"
    },
    {
      "@id": "http://schema.org/lodgingUnitType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LodgingReservation"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QualitativeValue"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Textual description of the unit type (including suite vs. room, size of bed, etc.).",
      "rdfs:label": "lodgingUnitType"
    },
    {
      "@id": "http://schema.org/modifiedTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date and time the reservation was modified.",
      "rdfs:label": "modifiedTime"
    },
    {
      "@id": "http://schema.org/encodingFormat",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/MediaObject"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Media type typically expressed using a MIME format (see <a href=\"http://www.iana.org/assignments/media-types/media-types.xhtml\">IANA site</a> and <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types\">MDN reference</a>) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).<br/><br/>\n\nIn cases where a <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a> has several media type representations, <a class=\"localLink\" href=\"http://schema.org/encoding\">encoding</a> can be used to indicate each <a class=\"localLink\" href=\"http://schema.org/MediaObject\">MediaObject</a> alongside particular <a class=\"localLink\" href=\"http://schema.org/encodingFormat\">encodingFormat</a> information.<br/><br/>\n\nUnregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.",
      "rdfs:label": "encodingFormat"
    },
    {
      "@id": "http://schema.org/thumbnail",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/VideoObject"
        },
        {
          "@id": "http://schema.org/ImageObject"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ImageObject"
      },
      "rdfs:comment": "Thumbnail image for an image or video.",
      "rdfs:label": "thumbnail"
    },
    {
      "@id": "http://schema.org/WantAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of expressing a desire about the object. An agent wants an object.",
      "rdfs:label": "WantAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ReactAction"
      }
    },
    {
      "@id": "http://schema.org/review",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Brand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Review"
      },
      "rdfs:comment": "A review of the item.",
      "rdfs:label": "review"
    },
    {
      "@id": "http://schema.org/musicArrangement",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "rdfs:comment": "An arrangement derived from the composition.",
      "rdfs:label": "musicArrangement"
    },
    {
      "@id": "http://schema.org/acceptedOffer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Offer"
      },
      "rdfs:comment": "The offer(s) -- e.g., product, quantity and price combinations -- included in the order.",
      "rdfs:label": "acceptedOffer"
    },
    {
      "@id": "http://schema.org/ReadAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of consuming written content.",
      "rdfs:label": "ReadAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ConsumeAction"
      }
    },
    {
      "@id": "http://schema.org/Specialty",
      "@type": "rdfs:Class",
      "rdfs:comment": "Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.",
      "rdfs:label": "Specialty",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/TaxiService",
      "@type": "rdfs:Class",
      "rdfs:comment": "A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.",
      "rdfs:label": "TaxiService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Service"
      }
    },
    {
      "@id": "http://schema.org/geographicArea",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Audience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/AdministrativeArea"
      },
      "rdfs:comment": "The geographic area associated with the audience.",
      "rdfs:label": "geographicArea"
    },
    {
      "@id": "http://schema.org/ratingCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AggregateRating"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The count of total number of ratings.",
      "rdfs:label": "ratingCount"
    },
    {
      "@id": "http://schema.org/foundingLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The place where the Organization was founded.",
      "rdfs:label": "foundingLocation"
    },
    {
      "@id": "http://schema.org/OnSitePickup",
      "@type": "http://schema.org/DeliveryMethod",
      "rdfs:comment": "A DeliveryMethod in which an item is collected on site, e.g. in a store or at a box office.",
      "rdfs:label": "OnSitePickup"
    },
    {
      "@id": "http://schema.org/FailedActionStatus",
      "@type": "http://schema.org/ActionStatusType",
      "rdfs:comment": "An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure.",
      "rdfs:label": "FailedActionStatus"
    },
    {
      "@id": "http://schema.org/dropoffLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/RentalCarReservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "Where a rental car can be dropped off.",
      "rdfs:label": "dropoffLocation"
    },
    {
      "@id": "http://schema.org/ItemAvailability",
      "@type": "rdfs:Class",
      "rdfs:comment": "A list of possible product availability options.",
      "rdfs:label": "ItemAvailability",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/containedIn",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/containedInPlace"
      },
      "rdfs:comment": "The basic containment relation between a place and one that contains it.",
      "rdfs:label": "containedIn"
    },
    {
      "@id": "http://schema.org/offerCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AggregateOffer"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of offers for the product.",
      "rdfs:label": "offerCount"
    },
    {
      "@id": "http://schema.org/owns",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/OwnershipInfo"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "rdfs:comment": "Products owned by the organization or person.",
      "rdfs:label": "owns"
    },
    {
      "@id": "http://schema.org/depth",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/VisualArtwork"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Distance"
        }
      ],
      "rdfs:comment": "The depth of the item.",
      "rdfs:label": "depth"
    },
    {
      "@id": "http://schema.org/totalPaymentDue",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Invoice"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MonetaryAmount"
        },
        {
          "@id": "http://schema.org/PriceSpecification"
        }
      ],
      "rdfs:comment": "The total amount due.",
      "rdfs:label": "totalPaymentDue"
    },
    {
      "@id": "http://schema.org/Occupation",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "rdfs:comment": "A profession, may involve prolonged training and/or a formal qualification.",
      "rdfs:label": "Occupation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/illustrator",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Book"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "The illustrator of the book.",
      "rdfs:label": "illustrator"
    },
    {
      "@id": "http://schema.org/ArtGallery",
      "@type": "rdfs:Class",
      "rdfs:comment": "An art gallery.",
      "rdfs:label": "ArtGallery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EntertainmentBusiness"
      }
    },
    {
      "@id": "http://schema.org/primaryImageOfPage",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/ImageObject"
      },
      "rdfs:comment": "Indicates the main image on the page.",
      "rdfs:label": "primaryImageOfPage"
    },
    {
      "@id": "http://schema.org/license",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "A license document that applies to this content, typically indicated by URL.",
      "rdfs:label": "license"
    },
    {
      "@id": "http://schema.org/accessibilityControl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Identifies input methods that are sufficient to fully control the described resource (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).",
      "rdfs:label": "accessibilityControl"
    },
    {
      "@id": "http://schema.org/targetPlatform",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/APIReference"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Type of app development: phone, Metro style, desktop, XBox, etc.",
      "rdfs:label": "targetPlatform"
    },
    {
      "@id": "http://schema.org/musicReleaseFormat",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicRelease"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicReleaseFormatType"
      },
      "rdfs:comment": "Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).",
      "rdfs:label": "musicReleaseFormat"
    },
    {
      "@id": "http://schema.org/busNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BusTrip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The unique identifier for the bus.",
      "rdfs:label": "busNumber"
    },
    {
      "@id": "http://schema.org/description",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://www.w3.org/2002/07/owl#equivalentProperty": {
        "@id": "http://purl.org/dc/terms/description"
      },
      "rdfs:comment": "A description of the item.",
      "rdfs:label": "description"
    },
    {
      "@id": "http://schema.org/Plumber",
      "@type": "rdfs:Class",
      "rdfs:comment": "A plumbing service.",
      "rdfs:label": "Plumber",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HomeAndConstructionBusiness"
      }
    },
    {
      "@id": "http://schema.org/Preschool",
      "@type": "rdfs:Class",
      "rdfs:comment": "A preschool.",
      "rdfs:label": "Preschool",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EducationalOrganization"
      }
    },
    {
      "@id": "http://schema.org/OrderCancelled",
      "@type": "http://schema.org/OrderStatus",
      "rdfs:comment": "OrderStatus representing cancellation of an order.",
      "rdfs:label": "OrderCancelled"
    },
    {
      "@id": "http://schema.org/RejectAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of rejecting to/adopting an object.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/AcceptAction\">AcceptAction</a>: The antonym of RejectAction.</li>\n</ul>\n",
      "rdfs:label": "RejectAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AllocateAction"
      }
    },
    {
      "@id": "http://schema.org/vehicleTransmission",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/QualitativeValue"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) (\"gearbox\" for cars).",
      "rdfs:label": "vehicleTransmission"
    },
    {
      "@id": "http://schema.org/TattooParlor",
      "@type": "rdfs:Class",
      "rdfs:comment": "A tattoo parlor.",
      "rdfs:label": "TattooParlor",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HealthAndBeautyBusiness"
      }
    },
    {
      "@id": "http://schema.org/GeoCircle",
      "@type": "rdfs:Class",
      "rdfs:comment": "A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape\n          it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.\n          The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.",
      "rdfs:label": "GeoCircle",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/GeoShape"
      }
    },
    {
      "@id": "http://schema.org/dateVehicleFirstRegistered",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The date of the first registration of the vehicle with the respective public authorities.",
      "rdfs:label": "dateVehicleFirstRegistered"
    },
    {
      "@id": "http://schema.org/event",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/PlayAction"
        },
        {
          "@id": "http://schema.org/LeaveAction"
        },
        {
          "@id": "http://schema.org/InviteAction"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/JoinAction"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/InformAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Event"
      },
      "rdfs:comment": "Upcoming or past event associated with this place, organization, or action.",
      "rdfs:label": "event"
    },
    {
      "@id": "http://schema.org/sport",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SportsOrganization"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "A type of sport (e.g. Baseball).",
      "rdfs:label": "sport"
    },
    {
      "@id": "http://schema.org/reviewBody",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Review"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The actual body of the review.",
      "rdfs:label": "reviewBody"
    },
    {
      "@id": "http://schema.org/purchaseDate",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Vehicle"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The date the item e.g. vehicle was purchased by the current owner.",
      "rdfs:label": "purchaseDate"
    },
    {
      "@id": "http://schema.org/BusinessFunction",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.<br/><br/>\n\nCommonly used values:<br/><br/>\n\n<ul>\n<li>http://purl.org/goodrelations/v1#ConstructionInstallation</li>\n<li>http://purl.org/goodrelations/v1#Dispose</li>\n<li>http://purl.org/goodrelations/v1#LeaseOut</li>\n<li>http://purl.org/goodrelations/v1#Maintain</li>\n<li>http://purl.org/goodrelations/v1#ProvideService</li>\n<li>http://purl.org/goodrelations/v1#Repair</li>\n<li>http://purl.org/goodrelations/v1#Sell</li>\n<li>http://purl.org/goodrelations/v1#Buy</li>\n</ul>\n",
      "rdfs:label": "BusinessFunction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/departureTerminal",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Identifier of the flight's departure terminal.",
      "rdfs:label": "departureTerminal"
    },
    {
      "@id": "http://schema.org/estimatedFlightDuration",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Duration"
        }
      ],
      "rdfs:comment": "The estimated time the flight will take.",
      "rdfs:label": "estimatedFlightDuration"
    },
    {
      "@id": "http://schema.org/Female",
      "@type": "http://schema.org/GenderType",
      "rdfs:comment": "The female gender.",
      "rdfs:label": "Female"
    },
    {
      "@id": "http://schema.org/Energy",
      "@type": "rdfs:Class",
      "rdfs:comment": "Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.",
      "rdfs:label": "Energy",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Quantity"
      }
    },
    {
      "@id": "http://schema.org/FurnitureStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A furniture store.",
      "rdfs:label": "FurnitureStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/BusStop",
      "@type": "rdfs:Class",
      "rdfs:comment": "A bus stop.",
      "rdfs:label": "BusStop",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/percentile90",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QuantitativeValueDistribution"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The 90th percentile value.",
      "rdfs:label": "percentile90"
    },
    {
      "@id": "http://schema.org/cookingMethod",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The method of cooking, such as Frying, Steaming, ...",
      "rdfs:label": "cookingMethod"
    },
    {
      "@id": "http://schema.org/businessFunction",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/TypeAndQuantityNode"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BusinessFunction"
      },
      "rdfs:comment": "The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.",
      "rdfs:label": "businessFunction"
    },
    {
      "@id": "http://schema.org/bookingTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date and time the reservation was booked.",
      "rdfs:label": "bookingTime"
    },
    {
      "@id": "http://schema.org/MotorcycleRepair",
      "@type": "rdfs:Class",
      "rdfs:comment": "A motorcycle repair shop.",
      "rdfs:label": "MotorcycleRepair",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AutomotiveBusiness"
      }
    },
    {
      "@id": "http://schema.org/sampleType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareSourceCode"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/codeSampleType"
      },
      "rdfs:comment": "What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.",
      "rdfs:label": "sampleType"
    },
    {
      "@id": "http://schema.org/OrderPaymentDue",
      "@type": "http://schema.org/OrderStatus",
      "rdfs:comment": "OrderStatus representing that payment is due on an order.",
      "rdfs:label": "OrderPaymentDue"
    },
    {
      "@id": "http://schema.org/permitAudience",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Permit"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Audience"
      },
      "rdfs:comment": "The target audience for this permit.",
      "rdfs:label": "permitAudience"
    },
    {
      "@id": "http://schema.org/geoTouches",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points.\" (a symmetric relationship, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a> )",
      "rdfs:label": "geoTouches"
    },
    {
      "@id": "http://schema.org/postalCode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/GeoCoordinates"
        },
        {
          "@id": "http://schema.org/PostalAddress"
        },
        {
          "@id": "http://schema.org/GeoShape"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The postal code. For example, 94043.",
      "rdfs:label": "postalCode"
    },
    {
      "@id": "http://schema.org/resultComment",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CommentAction"
        },
        {
          "@id": "http://schema.org/ReplyAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Comment"
      },
      "rdfs:comment": "A sub property of result. The Comment created or sent as a result of this action.",
      "rdfs:label": "resultComment",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/result"
      }
    },
    {
      "@id": "http://schema.org/GovernmentPermit",
      "@type": "rdfs:Class",
      "rdfs:comment": "A permit issued by a government agency.",
      "rdfs:label": "GovernmentPermit",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Permit"
      }
    },
    {
      "@id": "http://schema.org/InsertAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of adding at a specific location in an ordered collection.",
      "rdfs:label": "InsertAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AddAction"
      }
    },
    {
      "@id": "http://schema.org/eligibleCustomerType",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/BusinessEntityType"
      },
      "rdfs:comment": "The type(s) of customers for which the given offer is valid.",
      "rdfs:label": "eligibleCustomerType"
    },
    {
      "@id": "http://schema.org/containsPlace",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/containedInPlace"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "The basic containment relation between a place and another that it contains.",
      "rdfs:label": "containsPlace"
    },
    {
      "@id": "http://schema.org/Resort",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see <a href=\"http://en.wikipedia.org/wiki/Resort\">http://en.wikipedia.org/wiki/Resort</a>).\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "Resort",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LodgingBusiness"
      }
    },
    {
      "@id": "http://schema.org/disambiguatingDescription",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.",
      "rdfs:label": "disambiguatingDescription",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/description"
      }
    },
    {
      "@id": "http://schema.org/productSupported",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ContactPoint"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "rdfs:comment": "The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. \"iPhone\") or a general category of products or services (e.g. \"smartphones\").",
      "rdfs:label": "productSupported"
    },
    {
      "@id": "http://schema.org/userInteractionCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.",
      "rdfs:label": "userInteractionCount"
    },
    {
      "@id": "http://schema.org/Invoice",
      "@type": "rdfs:Class",
      "rdfs:comment": "A statement of the money due for goods or services; a bill.",
      "rdfs:label": "Invoice",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/Table",
      "@type": "rdfs:Class",
      "rdfs:comment": "A table on a Web page.",
      "rdfs:label": "Table",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPageElement"
      }
    },
    {
      "@id": "http://schema.org/language",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/WriteAction"
        },
        {
          "@id": "http://schema.org/CommunicateAction"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Language"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/inLanguage"
      },
      "rdfs:comment": "A sub property of instrument. The language used on this action.",
      "rdfs:label": "language",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/instrument"
      }
    },
    {
      "@id": "http://schema.org/itemCondition",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/OfferItemCondition"
      },
      "rdfs:comment": "A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.",
      "rdfs:label": "itemCondition"
    },
    {
      "@id": "http://schema.org/Distillery",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/743"
      },
      "http://schema.org/category": "issue-743",
      "rdfs:comment": "A distillery.",
      "rdfs:label": "Distillery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/elevation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/GeoShape"
        },
        {
          "@id": "http://schema.org/GeoCoordinates"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The elevation of a location (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>). Values may be of the form 'NUMBER UNIT<em>OF</em>MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.",
      "rdfs:label": "elevation"
    },
    {
      "@id": "http://schema.org/URL",
      "@type": "rdfs:Class",
      "rdfs:comment": "Data type: URL.",
      "rdfs:label": "URL",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Text"
      }
    },
    {
      "@id": "http://schema.org/isBasedOn",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "rdfs:comment": "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.",
      "rdfs:label": "isBasedOn"
    },
    {
      "@id": "http://schema.org/CompoundPriceSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. \"electricity\" or \"final cleaning\").",
      "rdfs:label": "CompoundPriceSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PriceSpecification"
      }
    },
    {
      "@id": "http://schema.org/PeopleAudience",
      "@type": "rdfs:Class",
      "rdfs:comment": "A set of characteristics belonging to people, e.g. who compose an item's target audience.",
      "rdfs:label": "PeopleAudience",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Audience"
      }
    },
    {
      "@id": "http://schema.org/availableThrough",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DeliveryEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "After this date, the item will no longer be available for pickup.",
      "rdfs:label": "availableThrough"
    },
    {
      "@id": "http://schema.org/employmentType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).",
      "rdfs:label": "employmentType"
    },
    {
      "@id": "http://schema.org/affiliation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "An organization that this person is affiliated with. For example, a school/university, a club, or a team.",
      "rdfs:label": "affiliation",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/memberOf"
      }
    },
    {
      "@id": "http://schema.org/GovernmentOrganization",
      "@type": "rdfs:Class",
      "rdfs:comment": "A governmental organization or agency.",
      "rdfs:label": "GovernmentOrganization",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/commentTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UserComments"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Date"
        },
        {
          "@id": "http://schema.org/DateTime"
        }
      ],
      "rdfs:comment": "The time at which the UserComment was made.",
      "rdfs:label": "commentTime"
    },
    {
      "@id": "http://schema.org/InStoreOnly",
      "@type": "http://schema.org/ItemAvailability",
      "rdfs:comment": "Indicates that the item is available only at physical locations.",
      "rdfs:label": "InStoreOnly"
    },
    {
      "@id": "http://schema.org/multipleValues",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "Whether multiple values are allowed for the property.  Default is false.",
      "rdfs:label": "multipleValues"
    },
    {
      "@id": "http://schema.org/founder",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A person who founded this organization.",
      "rdfs:label": "founder"
    },
    {
      "@id": "http://schema.org/creator",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/UserComments"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.",
      "rdfs:label": "creator"
    },
    {
      "@id": "http://schema.org/FoodEstablishmentReservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservation to dine at a food-related business.<br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.",
      "rdfs:label": "FoodEstablishmentReservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/fiberContent",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Mass"
      },
      "rdfs:comment": "The number of grams of fiber.",
      "rdfs:label": "fiberContent"
    },
    {
      "@id": "http://schema.org/rsvpResponse",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/RsvpAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/RsvpResponseType"
      },
      "rdfs:comment": "The response (yes, no, maybe) to the RSVP.",
      "rdfs:label": "rsvpResponse"
    },
    {
      "@id": "http://schema.org/PaymentChargeSpecification",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "The costs of settling the payment using a particular payment method.",
      "rdfs:label": "PaymentChargeSpecification",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PriceSpecification"
      }
    },
    {
      "@id": "http://schema.org/itemOffered",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Product"
        }
      ],
      "rdfs:comment": "The item being offered.",
      "rdfs:label": "itemOffered"
    },
    {
      "@id": "http://schema.org/suggestedMinAge",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PeopleAudience"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "Minimal age recommended for viewing content.",
      "rdfs:label": "suggestedMinAge"
    },
    {
      "@id": "http://schema.org/Saturday",
      "@type": "http://schema.org/DayOfWeek",
      "http://schema.org/sameAs": {
        "@id": "http://www.wikidata.org/entity/Q131"
      },
      "rdfs:comment": "The day of the week between Friday and Sunday.",
      "rdfs:label": "Saturday"
    },
    {
      "@id": "http://schema.org/BusReservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservation for bus travel. <br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class=\"localLink\" href=\"http://schema.org/Offer\">Offer</a>.",
      "rdfs:label": "BusReservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/DVDFormat",
      "@type": "http://schema.org/MusicReleaseFormatType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "DVDFormat.",
      "rdfs:label": "DVDFormat"
    },
    {
      "@id": "http://schema.org/ticketedSeat",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Ticket"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Seat"
      },
      "rdfs:comment": "The seat associated with the ticket.",
      "rdfs:label": "ticketedSeat"
    },
    {
      "@id": "http://schema.org/Taxi",
      "@type": "rdfs:Class",
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/TaxiService"
      },
      "rdfs:comment": "A taxi.",
      "rdfs:label": "Taxi",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Service"
      }
    },
    {
      "@id": "http://schema.org/calories",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Energy"
      },
      "rdfs:comment": "The number of calories.",
      "rdfs:label": "calories"
    },
    {
      "@id": "http://schema.org/pickupLocation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/RentalCarReservation"
        },
        {
          "@id": "http://schema.org/TaxiReservation"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "Where a taxi will pick up a passenger or a rental car can be picked up.",
      "rdfs:label": "pickupLocation"
    },
    {
      "@id": "http://schema.org/lowPrice",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AggregateOffer"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The lowest price of all offers available.<br/><br/>\n\nUsage guidelines:<br/><br/>\n\n<ul>\n<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n</ul>\n",
      "rdfs:label": "lowPrice"
    },
    {
      "@id": "http://schema.org/serviceType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Service"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The type of service being offered, e.g. veterans' benefits, emergency relief, etc.",
      "rdfs:label": "serviceType"
    },
    {
      "@id": "http://schema.org/GroupBoardingPolicy",
      "@type": "http://schema.org/BoardingPolicyType",
      "rdfs:comment": "The airline boards by groups based on check-in time, priority, etc.",
      "rdfs:label": "GroupBoardingPolicy"
    },
    {
      "@id": "http://schema.org/Physician",
      "@type": "rdfs:Class",
      "rdfs:comment": "A doctor's office.",
      "rdfs:label": "Physician",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/MedicalOrganization"
        },
        {
          "@id": "http://schema.org/MedicalBusiness"
        }
      ]
    },
    {
      "@id": "http://schema.org/RsvpResponseType",
      "@type": "rdfs:Class",
      "rdfs:comment": "RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.",
      "rdfs:label": "RsvpResponseType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/releaseNotes",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "Description of what changed in this version.",
      "rdfs:label": "releaseNotes"
    },
    {
      "@id": "http://schema.org/scheduledTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PlanAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The time the object is scheduled to.",
      "rdfs:label": "scheduledTime"
    },
    {
      "@id": "http://schema.org/carrierRequirements",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MobileApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).",
      "rdfs:label": "carrierRequirements"
    },
    {
      "@id": "http://schema.org/flightDistance",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Distance"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The distance of the flight.",
      "rdfs:label": "flightDistance"
    },
    {
      "@id": "http://schema.org/OrderItem",
      "@type": "rdfs:Class",
      "rdfs:comment": "An order item is a line of an order. It includes the quantity and shipping details of a bought offer.",
      "rdfs:label": "OrderItem",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/DayOfWeek",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.<br/><br/>\n\nOriginally, URLs from <a href=\"http://purl.org/goodrelations/v1\">GoodRelations</a> were used (for <a class=\"localLink\" href=\"http://schema.org/Monday\">Monday</a>, <a class=\"localLink\" href=\"http://schema.org/Tuesday\">Tuesday</a>, <a class=\"localLink\" href=\"http://schema.org/Wednesday\">Wednesday</a>, <a class=\"localLink\" href=\"http://schema.org/Thursday\">Thursday</a>, <a class=\"localLink\" href=\"http://schema.org/Friday\">Friday</a>, <a class=\"localLink\" href=\"http://schema.org/Saturday\">Saturday</a>, <a class=\"localLink\" href=\"http://schema.org/Sunday\">Sunday</a> plus a special entry for <a class=\"localLink\" href=\"http://schema.org/PublicHolidays\">PublicHolidays</a>); these have now been integrated directly into schema.org.",
      "rdfs:label": "DayOfWeek",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/courseCode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Course"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The identifier for the <a class=\"localLink\" href=\"http://schema.org/Course\">Course</a> used by the course <a class=\"localLink\" href=\"http://schema.org/provider\">provider</a> (e.g. CS101 or 6.001).",
      "rdfs:label": "courseCode"
    },
    {
      "@id": "http://schema.org/BusinessEntityType",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.<br/><br/>\n\nCommonly used values:<br/><br/>\n\n<ul>\n<li>http://purl.org/goodrelations/v1#Business</li>\n<li>http://purl.org/goodrelations/v1#Enduser</li>\n<li>http://purl.org/goodrelations/v1#PublicInstitution</li>\n<li>http://purl.org/goodrelations/v1#Reseller</li>\n</ul>\n",
      "rdfs:label": "BusinessEntityType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/polygon",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GeoShape"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.",
      "rdfs:label": "polygon"
    },
    {
      "@id": "http://schema.org/TipAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of giving money voluntarily to a beneficiary in recognition of services rendered.",
      "rdfs:label": "TipAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TradeAction"
      }
    },
    {
      "@id": "http://schema.org/cssSelector",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1389"
      },
      "http://schema.org/category": "issue-1389",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/SpeakableSpecification"
        },
        {
          "@id": "http://schema.org/WebPageElement"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CssSelectorType"
      },
      "rdfs:comment": "A CSS selector, e.g. of a <a class=\"localLink\" href=\"http://schema.org/SpeakableSpecification\">SpeakableSpecification</a> or <a class=\"localLink\" href=\"http://schema.org/WebPageElement\">WebPageElement</a>. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\".",
      "rdfs:label": "cssSelector"
    },
    {
      "@id": "http://schema.org/HowToDirection",
      "@type": "rdfs:Class",
      "rdfs:comment": "A direction indicating a single action to do in the instructions for how to achieve a result.",
      "rdfs:label": "HowToDirection",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/ListItem"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ]
    },
    {
      "@id": "http://schema.org/offeredBy",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Offer"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/makesOffer"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A pointer to the organization or person making the offer.",
      "rdfs:label": "offeredBy"
    },
    {
      "@id": "http://schema.org/Apartment",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href=\"http://en.wikipedia.org/wiki/Apartment\">http://en.wikipedia.org/wiki/Apartment</a>).",
      "rdfs:label": "Apartment",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Accommodation"
      }
    },
    {
      "@id": "http://schema.org/NoteDigitalDocument",
      "@type": "rdfs:Class",
      "rdfs:comment": "A file containing a note, primarily for the author.",
      "rdfs:label": "NoteDigitalDocument",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/DigitalDocument"
      }
    },
    {
      "@id": "http://schema.org/Service",
      "@type": "rdfs:Class",
      "rdfs:comment": "A service provided by an organization, e.g. delivery service, print services, etc.",
      "rdfs:label": "Service",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/supply",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/HowToDirection"
        },
        {
          "@id": "http://schema.org/HowTo"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/HowToSupply"
        }
      ],
      "rdfs:comment": "A sub-property of instrument. A supply consumed when performing instructions or a direction.",
      "rdfs:label": "supply",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/instrument"
      }
    },
    {
      "@id": "http://schema.org/error",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Action"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "For failed actions, more information on the cause of the failure.",
      "rdfs:label": "error"
    },
    {
      "@id": "http://schema.org/Campground",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A camping site, campsite, or <a class=\"localLink\" href=\"http://schema.org/Campground\">Campground</a> is a place used for overnight stay in the outdoors, typically containing individual <a class=\"localLink\" href=\"http://schema.org/CampingPitch\">CampingPitch</a> locations. <br/><br/>\n\nIn British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see <a href=\"https://en.wikipedia.org/wiki/Campsite\">https://en.wikipedia.org/wiki/Campsite</a>).<br/><br/>\n\nSee also the dedicated <a href=\"/docs/hotels.html\">document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "Campground",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/CivicStructure"
        },
        {
          "@id": "http://schema.org/LodgingBusiness"
        }
      ]
    },
    {
      "@id": "http://schema.org/validIn",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1779"
      },
      "http://schema.org/category": "issue-1779",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Permit"
        },
        {
          "@id": "http://schema.org/EducationalOccupationalCredential"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/AdministrativeArea"
      },
      "rdfs:comment": "The geographic area where a permit or similar thing is valid.",
      "rdfs:label": "validIn"
    },
    {
      "@id": "http://schema.org/PaymentDeclined",
      "@type": "http://schema.org/PaymentStatusType",
      "rdfs:comment": "The payee received the payment, but it was declined for some reason.",
      "rdfs:label": "PaymentDeclined"
    },
    {
      "@id": "http://schema.org/TennisComplex",
      "@type": "rdfs:Class",
      "rdfs:comment": "A tennis complex.",
      "rdfs:label": "TennisComplex",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SportsActivityLocation"
      }
    },
    {
      "@id": "http://schema.org/afterMedia",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/HowToDirection"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/MediaObject"
        }
      ],
      "rdfs:comment": "A media object representing the circumstances after performing this direction.",
      "rdfs:label": "afterMedia"
    },
    {
      "@id": "http://schema.org/Thing",
      "@type": "rdfs:Class",
      "rdfs:comment": "The most generic type of item.",
      "rdfs:label": "Thing"
    },
    {
      "@id": "http://schema.org/duringMedia",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/HowToDirection"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MediaObject"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "A media object representing the circumstances while performing this direction.",
      "rdfs:label": "duringMedia"
    },
    {
      "@id": "http://schema.org/workPresented",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ScreeningEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Movie"
      },
      "rdfs:comment": "The movie presented during this event.",
      "rdfs:label": "workPresented",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/workFeatured"
      }
    },
    {
      "@id": "http://schema.org/SubwayStation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A subway station.",
      "rdfs:label": "SubwayStation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/supportingData",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DataFeed"
      },
      "rdfs:comment": "Supporting data for a SoftwareApplication.",
      "rdfs:label": "supportingData"
    },
    {
      "@id": "http://schema.org/discountCurrency",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The currency of the discount.<br/><br/>\n\nUse standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\".",
      "rdfs:label": "discountCurrency"
    },
    {
      "@id": "http://schema.org/availableFrom",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DeliveryEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "When the item is available for pickup from the store, locker, etc.",
      "rdfs:label": "availableFrom"
    },
    {
      "@id": "http://schema.org/highPrice",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AggregateOffer"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The highest price of all offers available.<br/><br/>\n\nUsage guidelines:<br/><br/>\n\n<ul>\n<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n</ul>\n",
      "rdfs:label": "highPrice"
    },
    {
      "@id": "http://schema.org/geoDisjoint",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries.\" (a symmetric relationship, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>)",
      "rdfs:label": "geoDisjoint"
    },
    {
      "@id": "http://schema.org/VenueMap",
      "@type": "http://schema.org/MapCategoryType",
      "rdfs:comment": "A venue map (e.g. for malls, auditoriums, museums, etc.).",
      "rdfs:label": "VenueMap"
    },
    {
      "@id": "http://schema.org/publishingPrinciples",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "The publishingPrinciples property indicates (typically via <a class=\"localLink\" href=\"http://schema.org/URL\">URL</a>) a document describing the editorial principles of an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a> (or individual e.g. a <a class=\"localLink\" href=\"http://schema.org/Person\">Person</a> writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a> (e.g. <a class=\"localLink\" href=\"http://schema.org/NewsArticle\">NewsArticle</a>) the principles are those of the party primarily responsible for the creation of the <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a>.<br/><br/>\n\nWhile such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a <a class=\"localLink\" href=\"http://schema.org/funder\">funder</a>) can be expressed using schema.org terminology.",
      "rdfs:label": "publishingPrinciples"
    },
    {
      "@id": "http://schema.org/sponsor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/Grant"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/MedicalStudy"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.",
      "rdfs:label": "sponsor"
    },
    {
      "@id": "http://schema.org/producer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).",
      "rdfs:label": "producer"
    },
    {
      "@id": "http://schema.org/produces",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Service"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/serviceOutput"
      },
      "rdfs:comment": "The tangible thing generated by the service, e.g. a passport, permit, etc.",
      "rdfs:label": "produces"
    },
    {
      "@id": "http://schema.org/interactionType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/InteractionCounter"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Action"
      },
      "rdfs:comment": "The Action representing the type of interaction. For up votes, +1s, etc. use <a class=\"localLink\" href=\"http://schema.org/LikeAction\">LikeAction</a>. For down votes use <a class=\"localLink\" href=\"http://schema.org/DislikeAction\">DislikeAction</a>. Otherwise, use the most specific Action.",
      "rdfs:label": "interactionType"
    },
    {
      "@id": "http://schema.org/Courthouse",
      "@type": "rdfs:Class",
      "rdfs:comment": "A courthouse.",
      "rdfs:label": "Courthouse",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/GovernmentBuilding"
      }
    },
    {
      "@id": "http://schema.org/BroadcastService",
      "@type": "rdfs:Class",
      "rdfs:comment": "A delivery service through which content is provided via broadcast over the air or online.",
      "rdfs:label": "BroadcastService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Service"
      }
    },
    {
      "@id": "http://schema.org/estimatedSalary",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Occupation"
        },
        {
          "@id": "http://schema.org/JobPosting"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MonetaryAmountDistribution"
      },
      "rdfs:comment": "An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.",
      "rdfs:label": "estimatedSalary"
    },
    {
      "@id": "http://schema.org/ReservationStatusType",
      "@type": "rdfs:Class",
      "rdfs:comment": "Enumerated status values for Reservation.",
      "rdfs:label": "ReservationStatusType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/AutoWash",
      "@type": "rdfs:Class",
      "rdfs:comment": "A car wash business.",
      "rdfs:label": "AutoWash",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AutomotiveBusiness"
      }
    },
    {
      "@id": "http://schema.org/arrivalTerminal",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Identifier of the flight's arrival terminal.",
      "rdfs:label": "arrivalTerminal"
    },
    {
      "@id": "http://schema.org/mentions",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.",
      "rdfs:label": "mentions"
    },
    {
      "@id": "http://schema.org/Researcher",
      "@type": "http://schema.org/Audience",
      "rdfs:comment": "Researchers.",
      "rdfs:label": "Researcher"
    },
    {
      "@id": "http://schema.org/HardwareStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A hardware store.",
      "rdfs:label": "HardwareStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/geoMidpoint",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GeoCircle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/GeoCoordinates"
      },
      "rdfs:comment": "Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.",
      "rdfs:label": "geoMidpoint"
    },
    {
      "@id": "http://schema.org/AskAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of posing a question / favor to someone.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/ReplyAction\">ReplyAction</a>: Appears generally as a response to AskAction.</li>\n</ul>\n",
      "rdfs:label": "AskAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CommunicateAction"
      }
    },
    {
      "@id": "http://schema.org/numberOfPlayers",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Game"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "Indicate how many people can play this game (minimum, maximum, or range).",
      "rdfs:label": "numberOfPlayers"
    },
    {
      "@id": "http://schema.org/CommentPermission",
      "@type": "http://schema.org/DigitalDocumentPermissionType",
      "rdfs:comment": "Permission to add comments to the document.",
      "rdfs:label": "CommentPermission"
    },
    {
      "@id": "http://schema.org/LowFatDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet focused on reduced fat and cholesterol intake.",
      "rdfs:label": "LowFatDiet"
    },
    {
      "@id": "http://schema.org/dateDeleted",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DataFeedItem"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The datetime the item was removed from the DataFeed.",
      "rdfs:label": "dateDeleted"
    },
    {
      "@id": "http://schema.org/isicV4",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.",
      "rdfs:label": "isicV4"
    },
    {
      "@id": "http://schema.org/VisualArtsEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Visual arts event.",
      "rdfs:label": "VisualArtsEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/TrackAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent tracks an object for updates.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/FollowAction\">FollowAction</a>: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/SubscribeAction\">SubscribeAction</a>: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.</li>\n</ul>\n",
      "rdfs:label": "TrackAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FindAction"
      }
    },
    {
      "@id": "http://schema.org/currency",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1253"
      },
      "http://schema.org/category": "issue-1253",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/DatedMoneySpecification"
        },
        {
          "@id": "http://schema.org/MonetaryAmount"
        },
        {
          "@id": "http://schema.org/ExchangeRateSpecification"
        },
        {
          "@id": "http://schema.org/LoanOrCredit"
        },
        {
          "@id": "http://schema.org/MonetaryAmountDistribution"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The currency in which the monetary amount is expressed.<br/><br/>\n\nUse standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\".",
      "rdfs:label": "currency"
    },
    {
      "@id": "http://schema.org/numAdults",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LodgingReservation"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Integer"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The number of adults staying in the unit.",
      "rdfs:label": "numAdults"
    },
    {
      "@id": "http://schema.org/DanceGroup",
      "@type": "rdfs:Class",
      "rdfs:comment": "A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.",
      "rdfs:label": "DanceGroup",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PerformingGroup"
      }
    },
    {
      "@id": "http://schema.org/BeautySalon",
      "@type": "rdfs:Class",
      "rdfs:comment": "Beauty salon.",
      "rdfs:label": "BeautySalon",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HealthAndBeautyBusiness"
      }
    },
    {
      "@id": "http://schema.org/valueAddedTaxIncluded",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PriceSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.",
      "rdfs:label": "valueAddedTaxIncluded"
    },
    {
      "@id": "http://schema.org/acquiredFrom",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OwnershipInfo"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The organization or person from which the product was acquired.",
      "rdfs:label": "acquiredFrom"
    },
    {
      "@id": "http://schema.org/CommunicateAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.",
      "rdfs:label": "CommunicateAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/MenuItem",
      "@type": "rdfs:Class",
      "rdfs:comment": "A food or drink item listed in a menu or menu section.",
      "rdfs:label": "MenuItem",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/openingHours",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CivicStructure"
        },
        {
          "@id": "http://schema.org/LocalBusiness"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.<br/><br/>\n\n<ul>\n<li>Days are specified using the following two-letter combinations: <code>Mo</code>, <code>Tu</code>, <code>We</code>, <code>Th</code>, <code>Fr</code>, <code>Sa</code>, <code>Su</code>.</li>\n<li>Times are specified using 24:00 time. For example, 3pm is specified as <code>15:00</code>. </li>\n<li>Here is an example: <code>&lt;time itemprop=\"openingHours\" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.</li>\n<li>If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.</li>\n</ul>\n",
      "rdfs:label": "openingHours"
    },
    {
      "@id": "http://schema.org/annualPercentageRate",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FinancialProduct"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/Number"
        }
      ],
      "rdfs:comment": "The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.",
      "rdfs:label": "annualPercentageRate"
    },
    {
      "@id": "http://schema.org/RoofingContractor",
      "@type": "rdfs:Class",
      "rdfs:comment": "A roofing contractor.",
      "rdfs:label": "RoofingContractor",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/HomeAndConstructionBusiness"
      }
    },
    {
      "@id": "http://schema.org/flightNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Flight"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.",
      "rdfs:label": "flightNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/expectsAcceptanceOf",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
      },
      "http://schema.org/category": "issue-1741",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ConsumeAction"
        },
        {
          "@id": "http://schema.org/ActionAccessSpecification"
        },
        {
          "@id": "http://schema.org/MediaSubscription"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Offer"
      },
      "rdfs:comment": "An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.",
      "rdfs:label": "expectsAcceptanceOf"
    },
    {
      "@id": "http://schema.org/slogan",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Brand"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/Service"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A slogan or motto associated with the item.",
      "rdfs:label": "slogan"
    },
    {
      "@id": "http://schema.org/game",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GameServer"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/gameServer"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/VideoGame"
      },
      "rdfs:comment": "Video game which is played on this server.",
      "rdfs:label": "game"
    },
    {
      "@id": "http://schema.org/tracks",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MusicPlaylist"
        },
        {
          "@id": "http://schema.org/MusicGroup"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicRecording"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/track"
      },
      "rdfs:comment": "A music recording (track)&#x2014;usually a single song.",
      "rdfs:label": "tracks"
    },
    {
      "@id": "http://schema.org/GovernmentService",
      "@type": "rdfs:Class",
      "rdfs:comment": "A service provided by a government organization, e.g. food stamps, veterans benefits, etc.",
      "rdfs:label": "GovernmentService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Service"
      }
    },
    {
      "@id": "http://schema.org/DeliveryEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "An event involving the delivery of an item.",
      "rdfs:label": "DeliveryEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/LowSaltDiet",
      "@type": "http://schema.org/RestrictedDiet",
      "rdfs:comment": "A diet focused on reduced sodium intake.",
      "rdfs:label": "LowSaltDiet"
    },
    {
      "@id": "http://schema.org/acceptsReservations",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FoodEstablishment"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/URL"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Boolean"
        }
      ],
      "rdfs:comment": "Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings <code>Yes</code> or <code>No</code>.",
      "rdfs:label": "acceptsReservations"
    },
    {
      "@id": "http://schema.org/lesserOrEqual",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "rdfs:comment": "This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.",
      "rdfs:label": "lesserOrEqual"
    },
    {
      "@id": "http://schema.org/requiredQuantity",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/HowToItem"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The required quantity of the item(s).",
      "rdfs:label": "requiredQuantity"
    },
    {
      "@id": "http://schema.org/location",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Action"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Event"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/PostalAddress"
        }
      ],
      "rdfs:comment": "The location of for example where the event is happening, an organization is located, or where an action takes place.",
      "rdfs:label": "location"
    },
    {
      "@id": "http://schema.org/toRecipient",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Message"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/ContactPoint"
        },
        {
          "@id": "http://schema.org/Audience"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "A sub property of recipient. The recipient who was directly sent the message.",
      "rdfs:label": "toRecipient",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/recipient"
      }
    },
    {
      "@id": "http://schema.org/reviewAspect",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1689"
      },
      "http://schema.org/category": "issue-1689",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Review"
        },
        {
          "@id": "http://schema.org/Rating"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "This Review or Rating is relevant to this part or facet of the itemReviewed.",
      "rdfs:label": "reviewAspect"
    },
    {
      "@id": "http://schema.org/HobbyShop",
      "@type": "rdfs:Class",
      "rdfs:comment": "A store that sells materials useful or necessary for various hobbies.",
      "rdfs:label": "HobbyShop",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/currenciesAccepted",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LocalBusiness"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The currency accepted.<br/><br/>\n\nUse standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\".",
      "rdfs:label": "currenciesAccepted"
    },
    {
      "@id": "http://schema.org/encodingType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EntryPoint"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The supported encoding type(s) for an EntryPoint request.",
      "rdfs:label": "encodingType"
    },
    {
      "@id": "http://schema.org/FollowAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/BefriendAction\">BefriendAction</a>: Unlike BefriendAction, FollowAction implies that the connection is <em>not</em> necessarily reciprocal.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/SubscribeAction\">SubscribeAction</a>: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/RegisterAction\">RegisterAction</a>: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/JoinAction\">JoinAction</a>: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/TrackAction\">TrackAction</a>: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).</li>\n</ul>\n",
      "rdfs:label": "FollowAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/InteractAction"
      }
    },
    {
      "@id": "http://schema.org/eligibleDuration",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/Offer"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The duration for which the given offer is valid.",
      "rdfs:label": "eligibleDuration"
    },
    {
      "@id": "http://schema.org/ChildrensEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Children's event.",
      "rdfs:label": "ChildrensEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/exerciseCourse",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ExerciseAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Place"
      },
      "rdfs:comment": "A sub property of location. The course where this action was taken.",
      "rdfs:label": "exerciseCourse",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/location"
      }
    },
    {
      "@id": "http://schema.org/RVPark",
      "@type": "rdfs:Class",
      "rdfs:comment": "A place offering space for \"Recreational Vehicles\", Caravans, mobile homes and the like.",
      "rdfs:label": "RVPark",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/TransitMap",
      "@type": "http://schema.org/MapCategoryType",
      "rdfs:comment": "A transit map.",
      "rdfs:label": "TransitMap"
    },
    {
      "@id": "http://schema.org/DateTime",
      "@type": [
        "rdfs:Class",
        "http://schema.org/DataType"
      ],
      "rdfs:comment": "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).",
      "rdfs:label": "DateTime"
    },
    {
      "@id": "http://schema.org/Enumeration",
      "@type": "rdfs:Class",
      "rdfs:comment": "Lists or enumerations—for example, a list of cuisines or music genres, etc.",
      "rdfs:label": "Enumeration",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/SingleFamilyResidence",
      "@type": "rdfs:Class",
      "rdfs:comment": "Residence type: Single-family home.",
      "rdfs:label": "SingleFamilyResidence",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/House"
      }
    },
    {
      "@id": "http://schema.org/caption",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ImageObject"
        },
        {
          "@id": "http://schema.org/VideoObject"
        },
        {
          "@id": "http://schema.org/AudioObject"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MediaObject"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the <a class=\"localLink\" href=\"http://schema.org/encodingFormat\">encodingFormat</a>.",
      "rdfs:label": "caption"
    },
    {
      "@id": "http://schema.org/CompletedActionStatus",
      "@type": "http://schema.org/ActionStatusType",
      "rdfs:comment": "An action that has already taken place.",
      "rdfs:label": "CompletedActionStatus"
    },
    {
      "@id": "http://schema.org/ActiveActionStatus",
      "@type": "http://schema.org/ActionStatusType",
      "rdfs:comment": "An in-progress action (e.g, while watching the movie, or driving to a location).",
      "rdfs:label": "ActiveActionStatus"
    },
    {
      "@id": "http://schema.org/DataCatalog",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass"
      },
      "http://www.w3.org/2002/07/owl#equivalentClass": {
        "@id": "http://www.w3.org/ns/dcat#Catalog"
      },
      "rdfs:comment": "A collection of datasets.",
      "rdfs:label": "DataCatalog",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/acceptedPaymentMethod",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/LoanOrCredit"
        },
        {
          "@id": "http://schema.org/PaymentMethod"
        }
      ],
      "rdfs:comment": "The payment method(s) accepted by seller for this offer.",
      "rdfs:label": "acceptedPaymentMethod"
    },
    {
      "@id": "http://schema.org/significantLinks",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/significantLink"
      },
      "rdfs:comment": "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.",
      "rdfs:label": "significantLinks"
    },
    {
      "@id": "http://schema.org/WholesaleStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A wholesale store.",
      "rdfs:label": "WholesaleStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/pickupTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/RentalCarReservation"
        },
        {
          "@id": "http://schema.org/TaxiReservation"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "When a taxi will pickup a passenger or a rental car can be picked up.",
      "rdfs:label": "pickupTime"
    },
    {
      "@id": "http://schema.org/servingSize",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NutritionInformation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The serving size, in terms of the number of volume or mass.",
      "rdfs:label": "servingSize"
    },
    {
      "@id": "http://schema.org/RentalCarReservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A reservation for a rental car.<br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.",
      "rdfs:label": "RentalCarReservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Reservation"
      }
    },
    {
      "@id": "http://schema.org/TravelAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.",
      "rdfs:label": "TravelAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MoveAction"
      }
    },
    {
      "@id": "http://schema.org/recordedIn",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/inverseOf": {
        "@id": "http://schema.org/recordedAt"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "rdfs:comment": "The CreativeWork that captured all or part of this Event.",
      "rdfs:label": "recordedIn"
    },
    {
      "@id": "http://schema.org/brand",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Product"
        },
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Service"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Brand"
        }
      ],
      "rdfs:comment": "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.",
      "rdfs:label": "brand"
    },
    {
      "@id": "http://schema.org/dateCreated",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/DataFeedItem"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/DateTime"
        },
        {
          "@id": "http://schema.org/Date"
        }
      ],
      "rdfs:comment": "The date on which the CreativeWork was created or the item was added to a DataFeed.",
      "rdfs:label": "dateCreated"
    },
    {
      "@id": "http://schema.org/musicGroupMember",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicGroup"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/member"
      },
      "rdfs:comment": "A member of a music group&#x2014;for example, John, Paul, George, or Ringo.",
      "rdfs:label": "musicGroupMember"
    },
    {
      "@id": "http://schema.org/honorificSuffix",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.",
      "rdfs:label": "honorificSuffix"
    },
    {
      "@id": "http://schema.org/OrganizationRole",
      "@type": "rdfs:Class",
      "rdfs:comment": "A subclass of Role used to describe roles within organizations.",
      "rdfs:label": "OrganizationRole",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Role"
      }
    },
    {
      "@id": "http://schema.org/reservationId",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A unique identifier for the reservation.",
      "rdfs:label": "reservationId"
    },
    {
      "@id": "http://schema.org/SkiResort",
      "@type": "rdfs:Class",
      "rdfs:comment": "A ski resort.",
      "rdfs:label": "SkiResort",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SportsActivityLocation"
      }
    },
    {
      "@id": "http://schema.org/AutomatedTeller",
      "@type": "rdfs:Class",
      "rdfs:comment": "ATM/cash machine.",
      "rdfs:label": "AutomatedTeller",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialService"
      }
    },
    {
      "@id": "http://schema.org/Canal",
      "@type": "rdfs:Class",
      "rdfs:comment": "A canal, like the Panama Canal.",
      "rdfs:label": "Canal",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BodyOfWater"
      }
    },
    {
      "@id": "http://schema.org/numberOfRooms",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Suite"
        },
        {
          "@id": "http://schema.org/House"
        },
        {
          "@id": "http://schema.org/Apartment"
        },
        {
          "@id": "http://schema.org/Accommodation"
        },
        {
          "@id": "http://schema.org/LodgingBusiness"
        },
        {
          "@id": "http://schema.org/SingleFamilyResidence"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Number"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.\nTypical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.",
      "rdfs:label": "numberOfRooms"
    },
    {
      "@id": "http://schema.org/NGO",
      "@type": "rdfs:Class",
      "rdfs:comment": "Organization: Non-governmental Organization.",
      "rdfs:label": "NGO",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Organization"
      }
    },
    {
      "@id": "http://schema.org/TVSeries",
      "@type": "rdfs:Class",
      "rdfs:comment": "CreativeWorkSeries dedicated to TV broadcast and associated online delivery.",
      "rdfs:label": "TVSeries",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/CreativeWorkSeries"
        },
        {
          "@id": "http://schema.org/CreativeWork"
        }
      ]
    },
    {
      "@id": "http://schema.org/netWorth",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/MonetaryAmount"
        },
        {
          "@id": "http://schema.org/PriceSpecification"
        }
      ],
      "rdfs:comment": "The total financial value of the person as calculated by subtracting assets from liabilities.",
      "rdfs:label": "netWorth"
    },
    {
      "@id": "http://schema.org/vatID",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The Value-added Tax ID of the organization or person.",
      "rdfs:label": "vatID"
    },
    {
      "@id": "http://schema.org/departureTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Trip"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The expected departure time.",
      "rdfs:label": "departureTime"
    },
    {
      "@id": "http://schema.org/BarOrPub",
      "@type": "rdfs:Class",
      "rdfs:comment": "A bar or pub.",
      "rdfs:label": "BarOrPub",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/Float",
      "@type": "rdfs:Class",
      "rdfs:comment": "Data type: Floating number.",
      "rdfs:label": "Float",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Number"
      }
    },
    {
      "@id": "http://schema.org/DataType",
      "@type": "rdfs:Class",
      "rdfs:comment": "The basic data types such as Integers, Strings, etc.",
      "rdfs:label": "DataType",
      "rdfs:subClassOf": {
        "@id": "rdfs:Class"
      }
    },
    {
      "@id": "http://schema.org/playersOnline",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GameServer"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "Number of players on the server.",
      "rdfs:label": "playersOnline"
    },
    {
      "@id": "http://schema.org/referenceQuantity",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
        },
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsProperties"
        }
      ],
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UnitPriceSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.",
      "rdfs:label": "referenceQuantity"
    },
    {
      "@id": "http://schema.org/nationality",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Country"
      },
      "rdfs:comment": "Nationality of the person.",
      "rdfs:label": "nationality"
    },
    {
      "@id": "http://schema.org/FMRadioChannel",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1004"
      },
      "http://schema.org/category": "issue-1004",
      "rdfs:comment": "A radio channel that uses FM.",
      "rdfs:label": "FMRadioChannel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/RadioChannel"
      }
    },
    {
      "@id": "http://schema.org/Distance",
      "@type": "rdfs:Class",
      "rdfs:comment": "Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'.",
      "rdfs:label": "Distance",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Quantity"
      }
    },
    {
      "@id": "http://schema.org/MusicPlaylist",
      "@type": "rdfs:Class",
      "rdfs:comment": "A collection of music tracks in playlist form.",
      "rdfs:label": "MusicPlaylist",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/educationalFramework",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/AlignmentObject"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The framework to which the resource being described is aligned.",
      "rdfs:label": "educationalFramework"
    },
    {
      "@id": "http://schema.org/actors",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/VideoObject"
        },
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/Clip"
        },
        {
          "@id": "http://schema.org/Movie"
        },
        {
          "@id": "http://schema.org/MovieSeries"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        },
        {
          "@id": "http://schema.org/VideoGame"
        },
        {
          "@id": "http://schema.org/Episode"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/actor"
      },
      "rdfs:comment": "An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.",
      "rdfs:label": "actors"
    },
    {
      "@id": "http://schema.org/title",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The title of the job.",
      "rdfs:label": "title"
    },
    {
      "@id": "http://schema.org/QuantitativeValue",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A point value or interval for product characteristics and other purposes.",
      "rdfs:label": "QuantitativeValue",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/unitText",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/TypeAndQuantityNode"
        },
        {
          "@id": "http://schema.org/PropertyValue"
        },
        {
          "@id": "http://schema.org/UnitPriceSpecification"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for\n<a href='unitCode'>unitCode</a>.",
      "rdfs:label": "unitText"
    },
    {
      "@id": "http://schema.org/releaseDate",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Product"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "The release date of a product or product model. This can be used to distinguish the exact variant of a product.",
      "rdfs:label": "releaseDate"
    },
    {
      "@id": "http://schema.org/ScholarlyArticle",
      "@type": "rdfs:Class",
      "rdfs:comment": "A scholarly article.",
      "rdfs:label": "ScholarlyArticle",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Article"
      }
    },
    {
      "@id": "http://schema.org/accountId",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Invoice"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The identifier for the account the payment will be applied to.",
      "rdfs:label": "accountId",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/BedDetails",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also <a class=\"localLink\" href=\"http://schema.org/BedType\">BedType</a> (under development).",
      "rdfs:label": "BedDetails",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/Bakery",
      "@type": "rdfs:Class",
      "rdfs:comment": "A bakery.",
      "rdfs:label": "Bakery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/iswcCode",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The International Standard Musical Work Code for the composition.",
      "rdfs:label": "iswcCode"
    },
    {
      "@id": "http://schema.org/greaterOrEqual",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QualitativeValue"
      },
      "rdfs:comment": "This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.",
      "rdfs:label": "greaterOrEqual"
    },
    {
      "@id": "http://schema.org/False",
      "@type": "http://schema.org/Boolean",
      "rdfs:comment": "The boolean value false.",
      "rdfs:label": "False"
    },
    {
      "@id": "http://schema.org/OwnershipInfo",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass"
      },
      "rdfs:comment": "A structured value providing information about when a certain organization or person owned a certain product.",
      "rdfs:label": "OwnershipInfo",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/episode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/TVSeries"
        },
        {
          "@id": "http://schema.org/RadioSeries"
        },
        {
          "@id": "http://schema.org/CreativeWorkSeason"
        },
        {
          "@id": "http://schema.org/VideoGameSeries"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Episode"
      },
      "rdfs:comment": "An episode of a tv, radio or game media within a series or season.",
      "rdfs:label": "episode",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/hasPart"
      }
    },
    {
      "@id": "http://schema.org/MensClothingStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A men's clothing store.",
      "rdfs:label": "MensClothingStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/AcceptAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of committing to/adopting an object.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/RejectAction\">RejectAction</a>: The antonym of AcceptAction.</li>\n</ul>\n",
      "rdfs:label": "AcceptAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/AllocateAction"
      }
    },
    {
      "@id": "http://schema.org/ItemPage",
      "@type": "rdfs:Class",
      "rdfs:comment": "A page devoted to a single item, such as a particular product or hotel.",
      "rdfs:label": "ItemPage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/WebPage"
      }
    },
    {
      "@id": "http://schema.org/Language",
      "@type": "rdfs:Class",
      "rdfs:comment": "Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in <a href=\"https://en.wikipedia.org/wiki/IETF_language_tag\">BCP 47</a> can be used via the <a class=\"localLink\" href=\"http://schema.org/alternateName\">alternateName</a> property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using <a class=\"localLink\" href=\"http://schema.org/ComputerLanguage\">ComputerLanguage</a>.",
      "rdfs:label": "Language",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/leiCode",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#GLEIF"
        },
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO"
        }
      ],
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.",
      "rdfs:label": "leiCode",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/identifier"
      }
    },
    {
      "@id": "http://schema.org/NewsArticle",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
        },
        {
          "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP-draws"
        }
      ],
      "rdfs:comment": "A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.<br/><br/>\n\nA more detailed overview of <a href=\"/docs/news.html\">schema.org News markup</a> is also available.",
      "rdfs:label": "NewsArticle",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Article"
      }
    },
    {
      "@id": "http://schema.org/TheaterGroup",
      "@type": "rdfs:Class",
      "rdfs:comment": "A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.",
      "rdfs:label": "TheaterGroup",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PerformingGroup"
      }
    },
    {
      "@id": "http://schema.org/ParcelDelivery",
      "@type": "rdfs:Class",
      "rdfs:comment": "The delivery of a parcel either via the postal service or a commercial service.",
      "rdfs:label": "ParcelDelivery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/permissionType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DigitalDocumentPermission"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DigitalDocumentPermissionType"
      },
      "rdfs:comment": "The type of permission granted the person, organization, or audience.",
      "rdfs:label": "permissionType"
    },
    {
      "@id": "http://schema.org/boardingGroup",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/FlightReservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The airline-specific indicator of boarding order / preference.",
      "rdfs:label": "boardingGroup"
    },
    {
      "@id": "http://schema.org/BoardingPolicyType",
      "@type": "rdfs:Class",
      "rdfs:comment": "A type of boarding policy used by an airline.",
      "rdfs:label": "BoardingPolicyType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/addressLocality",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PostalAddress"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The locality. For example, Mountain View.",
      "rdfs:label": "addressLocality"
    },
    {
      "@id": "http://schema.org/Pond",
      "@type": "rdfs:Class",
      "rdfs:comment": "A pond.",
      "rdfs:label": "Pond",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BodyOfWater"
      }
    },
    {
      "@id": "http://schema.org/composer",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Event"
        },
        {
          "@id": "http://schema.org/MusicComposition"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Person"
        },
        {
          "@id": "http://schema.org/Organization"
        }
      ],
      "rdfs:comment": "The person or organization who wrote a composition, or who is the composer of a work performed at some event.",
      "rdfs:label": "composer"
    },
    {
      "@id": "http://schema.org/Answer",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange"
      },
      "rdfs:comment": "An answer offered to a question; perhaps correct, perhaps opinionated or wrong.",
      "rdfs:label": "Answer",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Comment"
      }
    },
    {
      "@id": "http://schema.org/Brewery",
      "@type": "rdfs:Class",
      "rdfs:comment": "Brewery.",
      "rdfs:label": "Brewery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FoodEstablishment"
      }
    },
    {
      "@id": "http://schema.org/AllocateAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of organizing tasks/objects/events by associating resources to it.",
      "rdfs:label": "AllocateAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/OrganizeAction"
      }
    },
    {
      "@id": "http://schema.org/includedDataCatalog",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Dataset"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DataCatalog"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/includedInDataCatalog"
      },
      "rdfs:comment": "A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').",
      "rdfs:label": "includedDataCatalog"
    },
    {
      "@id": "http://schema.org/countriesNotSupported",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
      "rdfs:label": "countriesNotSupported"
    },
    {
      "@id": "http://schema.org/Thursday",
      "@type": "http://schema.org/DayOfWeek",
      "http://schema.org/sameAs": {
        "@id": "http://www.wikidata.org/entity/Q129"
      },
      "rdfs:comment": "The day of the week between Wednesday and Friday.",
      "rdfs:label": "Thursday"
    },
    {
      "@id": "http://schema.org/ParentAudience",
      "@type": "rdfs:Class",
      "rdfs:comment": "A set of characteristics describing parents, who can be interested in viewing some content.",
      "rdfs:label": "ParentAudience",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/PeopleAudience"
      }
    },
    {
      "@id": "http://schema.org/Hardcover",
      "@type": "http://schema.org/BookFormatType",
      "rdfs:comment": "Book format: Hardcover.",
      "rdfs:label": "Hardcover"
    },
    {
      "@id": "http://schema.org/RadioChannel",
      "@type": "rdfs:Class",
      "rdfs:comment": "A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.",
      "rdfs:label": "RadioChannel",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/BroadcastChannel"
      }
    },
    {
      "@id": "http://schema.org/hasCourseInstance",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Course"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/CourseInstance"
      },
      "rdfs:comment": "An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students.",
      "rdfs:label": "hasCourseInstance"
    },
    {
      "@id": "http://schema.org/Room",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see <a href=\"http://en.wikipedia.org/wiki/Room\">http://en.wikipedia.org/wiki/Room</a>).\n<br /><br />\nSee also the <a href=\"/docs/hotels.html\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "Room",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Accommodation"
      }
    },
    {
      "@id": "http://schema.org/PublicSwimmingPool",
      "@type": "rdfs:Class",
      "rdfs:comment": "A public swimming pool.",
      "rdfs:label": "PublicSwimmingPool",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SportsActivityLocation"
      }
    },
    {
      "@id": "http://schema.org/operatingSystem",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Operating systems supported (Windows 7, OSX 10.6, Android 1.6).",
      "rdfs:label": "operatingSystem"
    },
    {
      "@id": "http://schema.org/suggestedAnswer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Question"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Answer"
        },
        {
          "@id": "http://schema.org/ItemList"
        }
      ],
      "rdfs:comment": "An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site.",
      "rdfs:label": "suggestedAnswer"
    },
    {
      "@id": "http://schema.org/JobPosting",
      "@type": "rdfs:Class",
      "rdfs:comment": "A listing that describes a job opening in a certain organization.",
      "rdfs:label": "JobPosting",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/dateIssued",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Ticket"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date the ticket was issued.",
      "rdfs:label": "dateIssued"
    },
    {
      "@id": "http://schema.org/reservedTicket",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Reservation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Ticket"
      },
      "rdfs:comment": "A ticket associated with the reservation.",
      "rdfs:label": "reservedTicket"
    },
    {
      "@id": "http://schema.org/serverStatus",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/GameServer"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/GameServerStatus"
      },
      "rdfs:comment": "Status of a game server.",
      "rdfs:label": "serverStatus"
    },
    {
      "@id": "http://schema.org/lender",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/BorrowAction"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A sub property of participant. The person that lends the object being borrowed.",
      "rdfs:label": "lender",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/Date",
      "@type": [
        "http://schema.org/DataType",
        "rdfs:Class"
      ],
      "rdfs:comment": "A date value in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>.",
      "rdfs:label": "Date"
    },
    {
      "@id": "http://schema.org/mapType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Map"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MapCategoryType"
      },
      "rdfs:comment": "Indicates the kind of Map, from the MapCategoryType Enumeration.",
      "rdfs:label": "mapType"
    },
    {
      "@id": "http://schema.org/MusicReleaseFormatType",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).",
      "rdfs:label": "MusicReleaseFormatType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/minValue",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MonetaryAmount"
        },
        {
          "@id": "http://schema.org/PropertyValue"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        },
        {
          "@id": "http://schema.org/PropertyValueSpecification"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The lower value of some characteristic or property.",
      "rdfs:label": "minValue"
    },
    {
      "@id": "http://schema.org/Conversation",
      "@type": "rdfs:Class",
      "rdfs:comment": "One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties.",
      "rdfs:label": "Conversation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/MediaObject",
      "@type": "rdfs:Class",
      "rdfs:comment": "A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).",
      "rdfs:label": "MediaObject",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/datePublished",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Date"
      },
      "rdfs:comment": "Date of first broadcast/publication.",
      "rdfs:label": "datePublished"
    },
    {
      "@id": "http://schema.org/Cemetery",
      "@type": "rdfs:Class",
      "rdfs:comment": "A graveyard.",
      "rdfs:label": "Cemetery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/AccountingService",
      "@type": "rdfs:Class",
      "rdfs:comment": "Accountancy business.<br/><br/>\n\nAs a <a class=\"localLink\" href=\"http://schema.org/LocalBusiness\">LocalBusiness</a> it can be described as a <a class=\"localLink\" href=\"http://schema.org/provider\">provider</a> of one or more <a class=\"localLink\" href=\"http://schema.org/Service\">Service</a>(s).",
      "rdfs:label": "AccountingService",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/FinancialService"
      }
    },
    {
      "@id": "http://schema.org/CheckInAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/CheckOutAction\">CheckOutAction</a>: The antonym of CheckInAction.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/ArriveAction\">ArriveAction</a>: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/ConfirmAction\">ConfirmAction</a>: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the <em>start</em> of a previously reserved service rather than its validity/existence.</li>\n</ul>\n",
      "rdfs:label": "CheckInAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CommunicateAction"
      }
    },
    {
      "@id": "http://schema.org/geoIntersects",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "rdfs:comment": "Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.",
      "rdfs:label": "geoIntersects"
    },
    {
      "@id": "http://schema.org/priceType",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UnitPriceSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry.",
      "rdfs:label": "priceType"
    },
    {
      "@id": "http://schema.org/distribution",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Dataset"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DataDownload"
      },
      "rdfs:comment": "A downloadable form of this dataset, at a specific location, in a specific format.",
      "rdfs:label": "distribution"
    },
    {
      "@id": "http://schema.org/isAccessibleForFree",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/PublicationEvent"
        },
        {
          "@id": "http://schema.org/Event"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "A flag to signal that the item, event, or place is accessible for free.",
      "rdfs:label": "isAccessibleForFree"
    },
    {
      "@id": "http://schema.org/geoCoveredBy",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/GeospatialGeometry"
        },
        {
          "@id": "http://schema.org/Place"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeospatialGeometry"
        }
      ],
      "rdfs:comment": "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.",
      "rdfs:label": "geoCoveredBy"
    },
    {
      "@id": "http://schema.org/BusinessAudience",
      "@type": "rdfs:Class",
      "rdfs:comment": "A set of characteristics belonging to businesses, e.g. who compose an item's target audience.",
      "rdfs:label": "BusinessAudience",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Audience"
      }
    },
    {
      "@id": "http://schema.org/LodgingBusiness",
      "@type": "rdfs:Class",
      "rdfs:comment": "A lodging business, such as a motel, hotel, or inn.",
      "rdfs:label": "LodgingBusiness",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/sender",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Message"
        },
        {
          "@id": "http://schema.org/ReceiveAction"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Audience"
        },
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A sub property of participant. The participant who is at the sending end of the action.",
      "rdfs:label": "sender",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/Airport",
      "@type": "rdfs:Class",
      "rdfs:comment": "An airport.",
      "rdfs:label": "Airport",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/SinglePlayer",
      "@type": "http://schema.org/GamePlayMode",
      "rdfs:comment": "Play mode: SinglePlayer. Which is played by a lone player.",
      "rdfs:label": "SinglePlayer"
    },
    {
      "@id": "http://schema.org/seasonNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWorkSeason"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Integer"
        }
      ],
      "rdfs:comment": "Position of the season within an ordered group of seasons.",
      "rdfs:label": "seasonNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/position"
      }
    },
    {
      "@id": "http://schema.org/xpath",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1389"
      },
      "http://schema.org/category": "issue-1389",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/SpeakableSpecification"
        },
        {
          "@id": "http://schema.org/WebPageElement"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/XPathType"
      },
      "rdfs:comment": "An XPath, e.g. of a <a class=\"localLink\" href=\"http://schema.org/SpeakableSpecification\">SpeakableSpecification</a> or <a class=\"localLink\" href=\"http://schema.org/WebPageElement\">WebPageElement</a>. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\".",
      "rdfs:label": "xpath"
    },
    {
      "@id": "http://schema.org/orderItemNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OrderItem"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The identifier of the order item.",
      "rdfs:label": "orderItemNumber"
    },
    {
      "@id": "http://schema.org/EventStatusType",
      "@type": "rdfs:Class",
      "rdfs:comment": "EventStatusType is an enumeration type whose instances represent several states that an Event may be in.",
      "rdfs:label": "EventStatusType",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/Ticket",
      "@type": "rdfs:Class",
      "rdfs:comment": "Used to describe a ticket to an event, a flight, a bus ride, etc.",
      "rdfs:label": "Ticket",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/CreativeWorkSeason",
      "@type": "rdfs:Class",
      "rdfs:comment": "A media season e.g. tv, radio, video game etc.",
      "rdfs:label": "CreativeWorkSeason",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWork"
      }
    },
    {
      "@id": "http://schema.org/Reservation",
      "@type": "rdfs:Class",
      "rdfs:comment": "Describes a reservation for travel, dining or an event. Some reservations require tickets. <br/><br/>\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use <a class=\"localLink\" href=\"http://schema.org/Offer\">Offer</a>.",
      "rdfs:label": "Reservation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/ItemListUnordered",
      "@type": "http://schema.org/ItemListOrderType",
      "rdfs:comment": "An ItemList ordered with no explicit order.",
      "rdfs:label": "ItemListUnordered"
    },
    {
      "@id": "http://schema.org/clipNumber",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Clip"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/Integer"
        }
      ],
      "rdfs:comment": "Position of the clip within an ordered group of clips.",
      "rdfs:label": "clipNumber",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/position"
      }
    },
    {
      "@id": "http://schema.org/processingTime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/ServiceChannel"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Duration"
      },
      "rdfs:comment": "Estimated processing time for the service using this channel.",
      "rdfs:label": "processingTime"
    },
    {
      "@id": "http://schema.org/FindAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of finding an object.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/SearchAction\">SearchAction</a>: FindAction is generally lead by a SearchAction, but not necessarily.</li>\n</ul>\n",
      "rdfs:label": "FindAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/percentile75",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://github.com/schemaorg/schemaorg/issues/1698"
      },
      "http://schema.org/category": "issue-1698",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/QuantitativeValueDistribution"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Number"
      },
      "rdfs:comment": "The 75th percentile value.",
      "rdfs:label": "percentile75"
    },
    {
      "@id": "http://schema.org/RecyclingCenter",
      "@type": "rdfs:Class",
      "rdfs:comment": "A recycling center.",
      "rdfs:label": "RecyclingCenter",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/coach",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SportsTeam"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A person that acts in a coaching role for a sports team.",
      "rdfs:label": "coach"
    },
    {
      "@id": "http://schema.org/Hospital",
      "@type": "rdfs:Class",
      "rdfs:comment": "A hospital.",
      "rdfs:label": "Hospital",
      "rdfs:subClassOf": [
        {
          "@id": "http://schema.org/MedicalOrganization"
        },
        {
          "@id": "http://schema.org/CivicStructure"
        },
        {
          "@id": "http://schema.org/EmergencyService"
        }
      ]
    },
    {
      "@id": "http://schema.org/Festival",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Festival.",
      "rdfs:label": "Festival",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/LockerDelivery",
      "@type": "rdfs:Class",
      "rdfs:comment": "A DeliveryMethod in which an item is made available via locker.",
      "rdfs:label": "LockerDelivery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/DeliveryMethod"
      }
    },
    {
      "@id": "http://schema.org/ClothingStore",
      "@type": "rdfs:Class",
      "rdfs:comment": "A clothing store.",
      "rdfs:label": "ClothingStore",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Store"
      }
    },
    {
      "@id": "http://schema.org/yield",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/HowTo"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/QuantitativeValue"
        }
      ],
      "rdfs:comment": "The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.",
      "rdfs:label": "yield"
    },
    {
      "@id": "http://schema.org/paymentDueDate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Order"
        },
        {
          "@id": "http://schema.org/Invoice"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DateTime"
      },
      "rdfs:comment": "The date that payment is due.",
      "rdfs:label": "paymentDueDate"
    },
    {
      "@id": "http://schema.org/BookmarkAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "An agent bookmarks/flags/labels/tags/marks an object.",
      "rdfs:label": "BookmarkAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/OrganizeAction"
      }
    },
    {
      "@id": "http://schema.org/fileSize",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.",
      "rdfs:label": "fileSize"
    },
    {
      "@id": "http://schema.org/RadioSeason",
      "@type": "rdfs:Class",
      "rdfs:comment": "Season dedicated to radio broadcast and associated online delivery.",
      "rdfs:label": "RadioSeason",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CreativeWorkSeason"
      }
    },
    {
      "@id": "http://schema.org/publicAccess",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Place"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "A flag to signal that the <a class=\"localLink\" href=\"http://schema.org/Place\">Place</a> is open to public visitors.  If this property is omitted there is no assumed default boolean value",
      "rdfs:label": "publicAccess"
    },
    {
      "@id": "http://schema.org/MixtapeAlbum",
      "@type": "http://schema.org/MusicAlbumProductionType",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "rdfs:comment": "MixtapeAlbum.",
      "rdfs:label": "MixtapeAlbum"
    },
    {
      "@id": "http://schema.org/dateline",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/NewsArticle"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "A <a href=\"https://en.wikipedia.org/wiki/Dateline\">dateline</a> is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.<br/><br/>\n\nStructured representations of dateline-related information can also be expressed more explicitly using <a class=\"localLink\" href=\"http://schema.org/locationCreated\">locationCreated</a> (which represents where a work was created e.g. where a news report was written).  For location depicted or described in the content, use <a class=\"localLink\" href=\"http://schema.org/contentLocation\">contentLocation</a>.<br/><br/>\n\nDateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: \"BEIRUT, Lebanon, June 2.\", \"Paris, France\", \"December 19, 2017 11:43AM Reporting from Washington\", \"Beijing/Moscow\", \"QUEZON CITY, Philippines\".",
      "rdfs:label": "dateline"
    },
    {
      "@id": "http://schema.org/headline",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Headline of the article.",
      "rdfs:label": "headline"
    },
    {
      "@id": "http://schema.org/hasMenuSection",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/MenuSection"
        },
        {
          "@id": "http://schema.org/Menu"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MenuSection"
      },
      "rdfs:comment": "A subgrouping of the menu (by dishes, course, serving time period, etc.).",
      "rdfs:label": "hasMenuSection"
    },
    {
      "@id": "http://schema.org/UpdateAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of managing by changing/editing the state of the object.",
      "rdfs:label": "UpdateAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Action"
      }
    },
    {
      "@id": "http://schema.org/AggregateRating",
      "@type": "rdfs:Class",
      "rdfs:comment": "The average rating based on multiple ratings or reviews.",
      "rdfs:label": "AggregateRating",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Rating"
      }
    },
    {
      "@id": "http://schema.org/relatedTo",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "The most generic familial relation.",
      "rdfs:label": "relatedTo"
    },
    {
      "@id": "http://schema.org/album",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicGroup"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/MusicAlbum"
      },
      "rdfs:comment": "A music album.",
      "rdfs:label": "album"
    },
    {
      "@id": "http://schema.org/runtime",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareSourceCode"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/runtimePlatform"
      },
      "rdfs:comment": "Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).",
      "rdfs:label": "runtime"
    },
    {
      "@id": "http://schema.org/alternateName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "An alias for the item.",
      "rdfs:label": "alternateName"
    },
    {
      "@id": "http://schema.org/ReplyAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of responding to a question/message asked/sent by the object. Related to <a class=\"localLink\" href=\"http://schema.org/AskAction\">AskAction</a><br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/AskAction\">AskAction</a>: Appears generally as an origin of a ReplyAction.</li>\n</ul>\n",
      "rdfs:label": "ReplyAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CommunicateAction"
      }
    },
    {
      "@id": "http://schema.org/EmailMessage",
      "@type": "rdfs:Class",
      "rdfs:comment": "An email message.",
      "rdfs:label": "EmailMessage",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Message"
      }
    },
    {
      "@id": "http://schema.org/follows",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "The most generic uni-directional social relation.",
      "rdfs:label": "follows"
    },
    {
      "@id": "http://schema.org/Paperback",
      "@type": "http://schema.org/BookFormatType",
      "rdfs:comment": "Book format: Paperback.",
      "rdfs:label": "Paperback"
    },
    {
      "@id": "http://schema.org/industry",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/JobPosting"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The industry associated with the job position.",
      "rdfs:label": "industry"
    },
    {
      "@id": "http://schema.org/BusStation",
      "@type": "rdfs:Class",
      "rdfs:comment": "A bus station.",
      "rdfs:label": "BusStation",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CivicStructure"
      }
    },
    {
      "@id": "http://schema.org/borrower",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/LendAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A sub property of participant. The person that borrows the object being lent.",
      "rdfs:label": "borrower",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/participant"
      }
    },
    {
      "@id": "http://schema.org/ingredients",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Recipe"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "http://schema.org/supersededBy": {
        "@id": "http://schema.org/recipeIngredient"
      },
      "rdfs:comment": "A single ingredient used in the recipe, e.g. sugar, flour or garlic.",
      "rdfs:label": "ingredients",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/supply"
      }
    },
    {
      "@id": "http://schema.org/dayOfWeek",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/OpeningHoursSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/DayOfWeek"
      },
      "rdfs:comment": "The day of the week for which these opening hours are valid.",
      "rdfs:label": "dayOfWeek"
    },
    {
      "@id": "http://schema.org/driveWheelConfiguration",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Vehicle"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/DriveWheelConfigurationValue"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.",
      "rdfs:label": "driveWheelConfiguration"
    },
    {
      "@id": "http://schema.org/BowlingAlley",
      "@type": "rdfs:Class",
      "rdfs:comment": "A bowling alley.",
      "rdfs:label": "BowlingAlley",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/SportsActivityLocation"
      }
    },
    {
      "@id": "http://schema.org/eligibleRegion",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": [
        {
          "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
        },
        {
          "@id": "https://github.com/schemaorg/schemaorg/issues/1741"
        }
      ],
      "http://schema.org/category": "issue-1741",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ActionAccessSpecification"
        },
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        },
        {
          "@id": "http://schema.org/DeliveryChargeSpecification"
        }
      ],
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Place"
        },
        {
          "@id": "http://schema.org/GeoShape"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.<br/><br/>\n\nSee also <a class=\"localLink\" href=\"http://schema.org/ineligibleRegion\">ineligibleRegion</a>.",
      "rdfs:label": "eligibleRegion",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/areaServed"
      }
    },
    {
      "@id": "http://schema.org/ItemListOrderAscending",
      "@type": "http://schema.org/ItemListOrderType",
      "rdfs:comment": "An ItemList ordered with lower values listed first.",
      "rdfs:label": "ItemListOrderAscending"
    },
    {
      "@id": "http://schema.org/ImageGallery",
      "@type": "rdfs:Class",
      "rdfs:comment": "Web page type: Image gallery page.",
      "rdfs:label": "ImageGallery",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/CollectionPage"
      }
    },
    {
      "@id": "http://schema.org/downvoteCount",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Comment"
        },
        {
          "@id": "http://schema.org/Question"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Integer"
      },
      "rdfs:comment": "The number of downvotes this question, answer or comment has received from the community.",
      "rdfs:label": "downvoteCount"
    },
    {
      "@id": "http://schema.org/valueRequired",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/PropertyValueSpecification"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Boolean"
      },
      "rdfs:comment": "Whether the property must be filled in to complete the action.  Default is false.",
      "rdfs:label": "valueRequired"
    },
    {
      "@id": "http://schema.org/candidate",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/VoteAction"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "A sub property of object. The candidate subject of this action.",
      "rdfs:label": "candidate",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/object"
      }
    },
    {
      "@id": "http://schema.org/Offer",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "rdfs:comment": "An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.<br/><br/>\n\nFor <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GTIN</a>-related fields, see <a href=\"http://www.gs1.org/barcodes/support/check_digit_calculator\">Check Digit calculator</a> and <a href=\"http://www.gs1us.org/resources/standards/gtin-validation-guide\">validation guide</a> from <a href=\"http://www.gs1.org/\">GS1</a>.",
      "rdfs:label": "Offer",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Intangible"
      }
    },
    {
      "@id": "http://schema.org/DataDownload",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass"
      },
      "http://www.w3.org/2002/07/owl#equivalentClass": {
        "@id": "http://www.w3.org/ns/dcat#Distribution"
      },
      "rdfs:comment": "A dataset in downloadable form.",
      "rdfs:label": "DataDownload",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/MediaObject"
      }
    },
    {
      "@id": "http://schema.org/Product",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "rdfs:comment": "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.",
      "rdfs:label": "Product",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Thing"
      }
    },
    {
      "@id": "http://schema.org/accessCode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/DeliveryEvent"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Password, PIN, or access code needed for delivery (e.g. from a locker).",
      "rdfs:label": "accessCode"
    },
    {
      "@id": "http://schema.org/CampingPitch",
      "@type": "rdfs:Class",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "rdfs:comment": "A <a class=\"localLink\" href=\"http://schema.org/CampingPitch\">CampingPitch</a> is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or <a class=\"localLink\" href=\"http://schema.org/Campground\">Campground</a>.<br/><br/>\n\nIn British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites.\n(Source: Wikipedia see <a href=\"https://en.wikipedia.org/wiki/Campsite\">https://en.wikipedia.org/wiki/Campsite</a>).<br/><br/>\n\nSee also the dedicated <a href=\"/docs/hotels.html\">document on the use of schema.org for marking up hotels and other forms of accommodations</a>.",
      "rdfs:label": "CampingPitch",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Accommodation"
      }
    },
    {
      "@id": "http://schema.org/CivicStructure",
      "@type": "rdfs:Class",
      "rdfs:comment": "A public structure, such as a town hall or concert hall.",
      "rdfs:label": "CivicStructure",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Place"
      }
    },
    {
      "@id": "http://schema.org/homeTeam",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SportsEvent"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/SportsTeam"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "The home team in a sports event.",
      "rdfs:label": "homeTeam",
      "rdfs:subPropertyOf": {
        "@id": "http://schema.org/competitor"
      }
    },
    {
      "@id": "http://schema.org/GeoCoordinates",
      "@type": "rdfs:Class",
      "rdfs:comment": "The geographic coordinates of a place or event.",
      "rdfs:label": "GeoCoordinates",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/StructuredValue"
      }
    },
    {
      "@id": "http://schema.org/performer",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Event"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Organization"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.",
      "rdfs:label": "performer"
    },
    {
      "@id": "http://schema.org/MiddleSchool",
      "@type": "rdfs:Class",
      "rdfs:comment": "A middle school (typically for children aged around 11-14, although this varies somewhat).",
      "rdfs:label": "MiddleSchool",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/EducationalOrganization"
      }
    },
    {
      "@id": "http://schema.org/AutomotiveBusiness",
      "@type": "rdfs:Class",
      "rdfs:comment": "Car repair, sales, or parts.",
      "rdfs:label": "AutomotiveBusiness",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/LocalBusiness"
      }
    },
    {
      "@id": "http://schema.org/permittedUsage",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Accommodation"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Indications regarding the permitted usage of the accommodation.",
      "rdfs:label": "permittedUsage"
    },
    {
      "@id": "http://schema.org/item",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/ListItem"
        },
        {
          "@id": "http://schema.org/DataFeedItem"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Thing"
      },
      "rdfs:comment": "An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.",
      "rdfs:label": "item"
    },
    {
      "@id": "http://schema.org/LiteraryEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Literary event.",
      "rdfs:label": "LiteraryEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/roleName",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Role"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/Text"
        },
        {
          "@id": "http://schema.org/URL"
        }
      ],
      "rdfs:comment": "A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'.",
      "rdfs:label": "roleName"
    },
    {
      "@id": "http://schema.org/discountCode",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Order"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "Code used to redeem a discount.",
      "rdfs:label": "discountCode"
    },
    {
      "@id": "http://schema.org/SocialEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Social event.",
      "rdfs:label": "SocialEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/advanceBookingRequirement",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms"
      },
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Offer"
        },
        {
          "@id": "http://schema.org/Demand"
        }
      ],
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/QuantitativeValue"
      },
      "rdfs:comment": "The amount of time that is required between accepting the offer and the actual usage of the resource or service.",
      "rdfs:label": "advanceBookingRequirement"
    },
    {
      "@id": "http://schema.org/knows",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Person"
      },
      "rdfs:comment": "The most generic bi-directional social/work relation.",
      "rdfs:label": "knows"
    },
    {
      "@id": "http://schema.org/contentType",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/EntryPoint"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The supported content type(s) for an EntryPoint response.",
      "rdfs:label": "contentType"
    },
    {
      "@id": "http://schema.org/EatAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of swallowing solid objects.",
      "rdfs:label": "EatAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/ConsumeAction"
      }
    },
    {
      "@id": "http://schema.org/ReservationHold",
      "@type": "http://schema.org/ReservationStatusType",
      "rdfs:comment": "The status of a reservation on hold pending an update like credit card number or flight changes.",
      "rdfs:label": "ReservationHold"
    },
    {
      "@id": "http://schema.org/specialty",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/WebPage"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Specialty"
      },
      "rdfs:comment": "One of the domain specialities to which this web page's content applies.",
      "rdfs:label": "specialty"
    },
    {
      "@id": "http://schema.org/TheaterEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Theater performance.",
      "rdfs:label": "TheaterEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/TakeAction",
      "@type": "rdfs:Class",
      "rdfs:comment": "The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.<br/><br/>\n\nRelated actions:<br/><br/>\n\n<ul>\n<li><a class=\"localLink\" href=\"http://schema.org/GiveAction\">GiveAction</a>: The reciprocal of TakeAction.</li>\n<li><a class=\"localLink\" href=\"http://schema.org/ReceiveAction\">ReceiveAction</a>: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.</li>\n</ul>\n",
      "rdfs:label": "TakeAction",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/TransferAction"
      }
    },
    {
      "@id": "http://schema.org/competitor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SportsEvent"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/SportsTeam"
        },
        {
          "@id": "http://schema.org/Person"
        }
      ],
      "rdfs:comment": "A competitor in a sports event.",
      "rdfs:label": "competitor"
    },
    {
      "@id": "http://schema.org/replyToUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/UserComments"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "The URL at which a reply may be posted to the specified UserComment.",
      "rdfs:label": "replyToUrl"
    },
    {
      "@id": "http://schema.org/worksFor",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/Person"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Organization"
      },
      "rdfs:comment": "Organizations that the person works for.",
      "rdfs:label": "worksFor"
    },
    {
      "@id": "http://schema.org/musicalKey",
      "@type": "rdf:Property",
      "http://purl.org/dc/terms/source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ"
      },
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/MusicComposition"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/Text"
      },
      "rdfs:comment": "The key, mode, or scale this composition uses.",
      "rdfs:label": "musicalKey"
    },
    {
      "@id": "http://schema.org/SportsEvent",
      "@type": "rdfs:Class",
      "rdfs:comment": "Event type: Sports event.",
      "rdfs:label": "SportsEvent",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Event"
      }
    },
    {
      "@id": "http://schema.org/GamePlayMode",
      "@type": "rdfs:Class",
      "rdfs:comment": "Indicates whether this game is multi-player, co-op or single-player.",
      "rdfs:label": "GamePlayMode",
      "rdfs:subClassOf": {
        "@id": "http://schema.org/Enumeration"
      }
    },
    {
      "@id": "http://schema.org/installUrl",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/SoftwareApplication"
      },
      "http://schema.org/rangeIncludes": {
        "@id": "http://schema.org/URL"
      },
      "rdfs:comment": "URL at which the app may be installed, if different from the URL of the item.",
      "rdfs:label": "installUrl"
    },
    {
      "@id": "http://schema.org/citation",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": {
        "@id": "http://schema.org/CreativeWork"
      },
      "http://schema.org/rangeIncludes": [
        {
          "@id": "http://schema.org/CreativeWork"
        },
        {
          "@id": "http://schema.org/Text"
        }
      ],
      "rdfs:comment": "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.",
      "rdfs:label": "citation"
    }
  ],
  "@id": "http://schema.org/#3.6"
}

export default schemaOrg
