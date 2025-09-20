"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  IconButton,
  Collapse,
  InputAdornment,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material"
import {
  Search,
  LocationOn,
  AccessTime,
  Favorite,
  Coffee,
  PhotoCamera,
  Park,
  MusicNote,
  SportsEsports,
  OpenInNew,
} from "@mui/icons-material"

const cities = ["New York", "Los Angeles", "Chicago", "San Francisco", "Seattle", "Austin", "Miami", "Boston"]

const iconMap = {
  Coffee: Coffee,
  Camera: PhotoCamera,
  TreePine: Park,
  Music: MusicNote,
  Gamepad2: SportsEsports,
}

const dateSpots = {
  "New York": [
    {
      id: 1,
      name: "Central Park Boathouse",
      description: "Romantic lakeside dining with stunning park views",
      location: "72nd St & Park Drive North, New York, NY",
      image: "/romantic-lakeside-restaurant-central-park.jpg",
      type: "Restaurant",
      icon: "Coffee",
      fullDescription:
        "Experience fine dining overlooking the serene waters of Central Park Lake. The Boathouse offers an intimate atmosphere perfect for special occasions.",
      bestTime: "Sunset dinner (6-8 PM) for magical golden hour lighting",
      tips: "Make reservations well in advance. Bring a light jacket for evening breezes.",
      mapsLink: "https://maps.google.com/?q=Central+Park+Boathouse+NYC",
    },
    {
      id: 2,
      name: "Brooklyn Bridge Walk",
      description: "Iconic bridge stroll with breathtaking city skyline views",
      location: "Brooklyn Bridge, New York, NY",
      image: "/brooklyn-bridge-sunset-couple-walking.jpg",
      type: "Outdoor",
      icon: "Camera",
      fullDescription:
        "Take a romantic walk across one of the world's most famous bridges. The pedestrian walkway offers stunning views of Manhattan and Brooklyn.",
      bestTime: "Golden hour (1 hour before sunset) for the best photos and lighting",
      tips: "Wear comfortable walking shoes. Bring a camera for amazing photo opportunities.",
      mapsLink: "https://maps.google.com/?q=Brooklyn+Bridge+NYC",
    },
    {
      id: 3,
      name: "High Line Park",
      description: "Elevated park built on historic freight rail line",
      location: "Gansevoort St to 34th St, New York, NY",
      image: "/high-line-park-new-york-couples-walking.jpg",
      type: "Park",
      icon: "TreePine",
      fullDescription:
        "Stroll through this unique elevated park featuring beautiful gardens, art installations, and city views. Perfect for a leisurely romantic walk.",
      bestTime: "Late afternoon (3-5 PM) to avoid crowds and enjoy good lighting",
      tips: "Start at the southern entrance. Grab coffee from nearby cafes to enjoy during your walk.",
      mapsLink: "https://maps.google.com/?q=High+Line+Park+NYC",
    },
    {
      id: 4,
      name: "Jazz at Lincoln Center",
      description: "World-class jazz performances in elegant venue",
      location: "10 Columbus Circle, New York, NY",
      image: "/jazz-club-elegant-interior-couples.jpg",
      type: "Entertainment",
      icon: "Music",
      fullDescription:
        "Enjoy intimate jazz performances in a sophisticated setting. The venue offers various shows from emerging artists to jazz legends.",
      bestTime: "Evening shows (8-10 PM) for the full jazz club experience",
      tips: "Check the schedule in advance. Dress code is smart casual to formal.",
      mapsLink: "https://maps.google.com/?q=Jazz+at+Lincoln+Center+NYC",
    },
  ],
  "Los Angeles": [
    {
      id: 5,
      name: "Griffith Observatory",
      description: "Stunning city views and stargazing opportunities",
      location: "2800 E Observatory Rd, Los Angeles, CA",
      image: "/griffith-observatory-los-angeles-sunset.jpg",
      type: "Outdoor",
      icon: "Camera",
      fullDescription:
        "Perched on Mount Hollywood, this iconic observatory offers breathtaking views of LA and the Hollywood sign, plus fascinating exhibits.",
      bestTime: "Sunset to evening (6-9 PM) for city lights and stargazing",
      tips: "Arrive early for parking. Bring a blanket for outdoor stargazing.",
      mapsLink: "https://maps.google.com/?q=Griffith+Observatory+LA",
    },
    {
      id: 6,
      name: "Santa Monica Pier",
      description: "Classic boardwalk with rides, games, and ocean views",
      location: "200 Santa Monica Pier, Santa Monica, CA",
      image: "/santa-monica-pier-ferris-wheel-sunset.jpg",
      type: "Entertainment",
      icon: "Gamepad2",
      fullDescription:
        "Experience the classic California pier with carnival rides, arcade games, and beautiful ocean views. Perfect for playful, nostalgic dates.",
      bestTime: "Late afternoon to evening (4-8 PM) for sunset and lights",
      tips: "Try the Ferris wheel at sunset. Bring quarters for arcade games.",
      mapsLink: "https://maps.google.com/?q=Santa+Monica+Pier+CA",
    },
  ],
  "San Francisco": [
    {
      id: 7,
      name: "Golden Gate Park",
      description: "Expansive park with gardens, museums, and peaceful trails",
      location: "Golden Gate Park, San Francisco, CA",
      image: "/golden-gate-park-san-francisco-japanese-garden.jpg",
      type: "Park",
      icon: "TreePine",
      fullDescription:
        "Explore over 1,000 acres of gardens, lakes, and trails. Visit the Japanese Tea Garden or rent paddle boats at Stow Lake.",
      bestTime: "Mid-morning to afternoon (10 AM-4 PM) for best weather",
      tips: "Pack a picnic lunch. Comfortable walking shoes recommended.",
      mapsLink: "https://maps.google.com/?q=Golden+Gate+Park+SF",
    },
  ],
}

export function DatePlanner() {
  const [selectedCity, setSelectedCity] = useState("New York")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [filteredSpots,setFilteredSpots]=useState<any[]>([]);
  useEffect(()=>{
  setFilteredSpots( dateSpots[selectedCity as keyof typeof dateSpots]?.filter(
      (spot) =>
        spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.description.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [])
  },[selectedCity]);
   


  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Paper
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
          py: 8,
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                color: "text.primary",
                mb: 2,
              }}
            >
              Find Your Perfect Date Spot
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
              Discover romantic locations and create unforgettable memories together
            </Typography>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 2 }}>
            Choose Your City
          </Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="city-select-label">Select City</InputLabel>
            <Select
              labelId="city-select-label"
              value={selectedCity}
              label="Select City"
              onChange={(e) => setSelectedCity(e.target.value)}
              sx={{
                borderRadius: 2,
              }}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mb: 4 }}>
          <TextField
            placeholder="Search date spots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ maxWidth: 400 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid container spacing={1.5}>
          {filteredSpots.map((spot) => {
            const IconComponent = iconMap[spot.icon as keyof typeof iconMap]
            const isExpanded = expandedCard === spot.id

            return (
              <Grid item xs={12} sm={6} md={4} key={spot.id}>
                <Card
                  sx={{
                    height:'fit-content',
                    width:'250px',
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: 2,
                    },
                  }}
                  onClick={() => setExpandedCard(isExpanded ? null : spot.id)}
                >
                  <Box sx={{ position: "relative", overflow:'hidden' }} className="overflow-hidden">
                    <CardMedia
                      component="img"
                      height="50px"
                      image={spot.image || "/placeholder.svg"}
                      alt={spot.name}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    <Chip
                      icon={<IconComponent />}
                      label={spot.type}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 2,
                        right: 2,
                        bgcolor: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(4px)",
                        fontSize: "0.6rem",
                        height: 16,
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 0.5 }}>
                      <Typography variant="subtitle2" component="h3" fontWeight={600} sx={{ fontSize: "0.8rem" }}>
                        {spot.name}
                      </Typography>
                      <IconButton size="small" color="default" sx={{ p: 0.25 }}>
                        <Favorite sx={{ fontSize: 14 }} />
                      </IconButton>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5, fontSize: "0.7rem", lineHeight: 1.2 }}
                    >
                      {spot.description}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                      <LocationOn sx={{ fontSize: 10, mr: 0.5, color: "text.secondary" }} />
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.65rem" }}>
                        {spot.location}
                      </Typography>
                    </Box>

                    <Collapse in={isExpanded}>
                      <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: "divider" }}>
                        <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                          About This Place
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {spot.fullDescription}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                          <AccessTime sx={{ fontSize: 16, mr: 1, color: "text.secondary" }} />
                          <Typography variant="subtitle2" fontWeight={600}>
                            Best Time to Visit
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {spot.bestTime}
                        </Typography>

                        <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                          Tips & What to Bring
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {spot.tips}
                        </Typography>

                        <Button
                          variant="outlined"
                          fullWidth
                          startIcon={<OpenInNew />}
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(spot.mapsLink, "_blank")
                          }}
                          sx={{ mt: 1 }}
                        >
                          Get Directions
                        </Button>
                      </Box>
                    </Collapse>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {filteredSpots.length === 0 && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="body1" color="text.secondary">
              No date spots found for "{searchTerm}" in {selectedCity}. Try a different search term.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
}
