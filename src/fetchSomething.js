const query = `{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}`;

const fetchSomething = async () =>
  await fetch("https://api.spacex.land/graphql", {
    credentials: "omit",
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables: null }),
    mode: "cors"
  });

export default fetchSomething;
