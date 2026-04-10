"""
Layout library for poster generation (normalized 0..1 coordinates).


Reference mappings:
- Layout A (photo + glass card)
- Layout B (photo + diagonal cyan band)
- Layout C (photo + left overlay)
- Layout D (photo + centered overlay, white text)
"""
from __future__ import annotations
from dataclasses import dataclass
from typing import Dict, Tuple, Any, List, Optional


@dataclass(frozen=True)
class LayoutSpec:
   id: str
   name: str
   kind: str  # "photo_overlay" | "photo_card" | "photo_band" | "photo_center"
   zones: Dict[str, Tuple[float, float, float, float]]
   style: Dict[str, Any]
   rules: Dict[str, Any]
   aspect_family: str = "portrait"


_ALIASES = {
   "layout_minimal_fade_left": "layout_photo_overlay_left",
   "layout_photo_dark_left_overlay": "layout_photo_overlay_left",
   "layout_clean_white_card_left": "layout_photo_glass_card",
   "layout_diagonal_band_left": "layout_photo_diagonal_band",
}




def _aspect_family(aspect_ratio: float) -> str:
   if aspect_ratio >= 1.1:
       return "landscape"
   if aspect_ratio <= 0.9:
       return "portrait"
   return "square"




_LAYOUTS: List[LayoutSpec] = [


   LayoutSpec(
       id="layout_photo_glass_card",
       name="Photo Glass Card",
       kind="photo_card",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "card": (0.100, 0.240, 0.900, 0.780),
           "headline": (0.140, 0.300, 0.860, 0.470),
           "subtext": (0.160, 0.500, 0.840, 0.620),
           "cta": (0.380, 0.690, 0.620, 0.760),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "panel_mode": "glass_card",
           "card_alpha": 190,
           "card_blur": 8,
           "text_align": "center",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
           "footer_style": {"bg_color": "brand", "text_color": "white"},
       },
       rules={"allow_corner_blob": False},
   ),


   LayoutSpec(
       id="layout_photo_diagonal_band",
       name="Photo Diagonal Band",
       kind="photo_band",
       zones={
           "logo": (0.060, 0.060, 0.420, 0.120),
           "headline": (0.080, 0.260, 0.620, 0.450),
           "subtext": (0.080, 0.480, 0.620, 0.620),
           "cta": (0.120, 0.680, 0.360, 0.750),
           "overlay": (0.000, 0.220, 0.780, 0.700),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "panel_mode": "diagonal_band",
           "overlay_mode": "dark_gradient",
           "text_align": "left",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
           "footer_style": {"bg_color": "brand", "text_color": "white"},
       },
       rules={"allow_corner_blob": False},
   ),


   LayoutSpec(
       id="layout_photo_overlay_left",
       name="Photo Left Overlay",
       kind="photo_overlay",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.060, 0.450, 0.800, 0.600),
           "subtext": (0.060, 0.620, 0.800, 0.750),
           "cta": (0.060, 0.800, 0.320, 0.870),
           "overlay": (0.000, 0.380, 0.820, 0.900),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "overlay_mode": "dark_gradient",
           "text_align": "left",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
           "footer_style": {"bg_color": "brand", "text_color": "white"},
       },
       rules={"allow_corner_blob": False},
   ),


   LayoutSpec(
       id="layout_split_modern_card",
       name="Split Modern Card",
       kind="split_card",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.060, 0.200, 0.520, 0.380),
           "subtext": (0.060, 0.400, 0.520, 0.560),
           "cta": (0.060, 0.600, 0.300, 0.670),
           "image": (0.550, 0.150, 0.950, 0.850),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "background": "light",
           "text_align": "left",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
           "image_corner_radius": 24,
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_glassmorphism_center_card",
       name="Glassmorphism Center Card",
       kind="glass_center",
       zones={
           "card": (0.150, 0.250, 0.850, 0.780),
           "logo": (0.350, 0.280, 0.650, 0.340),
           "headline": (0.220, 0.380, 0.780, 0.520),
           "subtext": (0.250, 0.550, 0.750, 0.650),
           "cta": (0.400, 0.700, 0.600, 0.760),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "panel_mode": "glass_card",
           "card_alpha": 0,
           "card_blur": 0,
           "card_border": True,
           "card_border_color": "rgba(255,255,255,0.3)",
           "text_align": "center",
           "headline_color": "Black",
           "subtext_color": "Black",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_modern_left_strip",
       name="Modern Left Brand Strip",
       kind="brand_strip",
       zones={
           "brand_strip": (0.000, 0.000, 0.080, 1.000),
           "logo": (0.120, 0.060, 0.450, 0.120),
           "headline": (0.120, 0.350, 0.850, 0.500),
           "subtext": (0.120, 0.520, 0.850, 0.650),
           "cta": (0.120, 0.700, 0.350, 0.770),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "text_align": "left",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_bold_center_stack",
       name="Bold Center Stack",
       kind="center_stack",
       zones={
           "logo": (0.350, 0.060, 0.650, 0.120),
           "headline": (0.150, 0.300, 0.850, 0.480),
           "subtext": (0.200, 0.520, 0.800, 0.620),
           "cta": (0.350, 0.700, 0.650, 0.770),
           "overlay": (0.100, 0.250, 0.900, 0.820),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "overlay_mode": "dark_gradient",
           "text_align": "center",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),
   LayoutSpec(
       id="layout_diagonal_overlay_right",
       name="Diagonal Overlay Right",
       kind="photo_band",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.060, 0.250, 0.600, 0.430),
           "subtext": (0.060, 0.450, 0.600, 0.600),
           "cta": (0.060, 0.650, 0.320, 0.720),
           "overlay": (0.400, 0.220, 1.000, 0.700),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "overlay_mode": "dark_gradient",
           "text_align": "left",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_text_top_image_bottom",
       name="Text Top Image Bottom",
       kind="photo_overlay",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.060, 0.180, 0.900, 0.350),
           "subtext": (0.060, 0.360, 0.900, 0.500),
           "cta": (0.060, 0.520, 0.360, 0.590),
           "image": (0.060, 0.600, 0.940, 0.880),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "text_align": "center",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
           "overlay_mode": "dark_gradient",
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_corner_text_card",
       name="Corner Text Card",
       kind="photo_card",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.600, 0.100, 0.950, 0.250),
           "subtext": (0.600, 0.260, 0.950, 0.400),
           "cta": (0.600, 0.420, 0.800, 0.490),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "panel_mode": "glass_card",
           "text_align": "right",
           "headline_color": "black",
           "subtext_color": "black",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_split_overlay_diagonal",
       name="Split Overlay Diagonal",
       kind="photo_band",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.060, 0.250, 0.500, 0.420),
           "subtext": (0.060, 0.450, 0.500, 0.600),
           "cta": (0.060, 0.650, 0.320, 0.720),
           "overlay": (0.500, 0.220, 1.000, 0.700),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "overlay_mode": "dark_gradient",
           "text_align": "left",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_modern_top_card",
       name="Modern Top Card",
       kind="photo_card",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.060, 0.140, 0.900, 0.300),
           "subtext": (0.060, 0.310, 0.900, 0.450),
           "cta": (0.060, 0.470, 0.360, 0.540),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "panel_mode": "glass_card",
           "text_align": "left",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_center_image_overlay",
       name="Center Image Overlay",
       kind="photo_overlay",
       zones={
           "logo": (0.350, 0.060, 0.650, 0.120),
           "headline": (0.150, 0.300, 0.850, 0.450),
           "subtext": (0.200, 0.470, 0.800, 0.570),
           "cta": (0.350, 0.600, 0.650, 0.670),
           "image": (0.100, 0.250, 0.900, 0.750),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "text_align": "center",
           "overlay_mode": "dark_gradient",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_corner_blob_dynamic",
       name="Corner Blob Dynamic",
       kind="photo_card",
       zones={
           "blob": (0.650, 0.000, 1.000, 0.350),
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.060, 0.420, 0.850, 0.600),
           "subtext": (0.060, 0.620, 0.850, 0.720),
           "cta": (0.060, 0.760, 0.350, 0.820),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "text_align": "left",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_vertical_text_band",
       name="Vertical Text Band",
       kind="photo_band",
       zones={
           "logo": (0.060, 0.060, 0.400, 0.120),
           "headline": (0.060, 0.180, 0.400, 0.400),
           "subtext": (0.060, 0.420, 0.400, 0.550),
           "cta": (0.060, 0.580, 0.300, 0.650),
           "band": (0.000, 0.000, 0.450, 1.000),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "text_align": "left",
           "overlay_mode": "dark_gradient",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


   LayoutSpec(
       id="layout_diagonal_gradient_center",
       name="Diagonal Gradient Center",
       kind="photo_band",
       zones={
           "logo": (0.350, 0.060, 0.650, 0.120),
           "headline": (0.150, 0.300, 0.850, 0.480),
           "subtext": (0.200, 0.500, 0.800, 0.600),
           "cta": (0.350, 0.650, 0.650, 0.720),
           "overlay": (0.100, 0.250, 0.900, 0.750),
           "footer": (0.000, 0.920, 1.000, 1.000),
       },
       style={
           "text_align": "center",
           "overlay_mode": "diagonal_gradient",
           "headline_color": "white",
           "subtext_color": "white",
           "cta_style": {"fill": "brand", "text_color": "white"},
       },
       rules={},
   ),


]




def build_layout_library(poster_size: str, aspect_ratio: float) -> List[LayoutSpec]:
   _ = poster_size
   family = _aspect_family(aspect_ratio)
   layouts = [l for l in _LAYOUTS if l.aspect_family == family]
   return layouts or list(_LAYOUTS)




def find_layout(layouts: List[LayoutSpec], layout_id: Optional[str]) -> Optional[LayoutSpec]:
   if not layout_id:
       return None
   lid = str(layout_id).strip()
   lid = _ALIASES.get(lid, lid)
   for layout in layouts:
       if layout.id == lid:
           return layout
   return None




def pick_layout(layouts: List[LayoutSpec], rng, *, used_ids: Optional[set[str]] = None) -> LayoutSpec:
   if not layouts:
       raise ValueError("No layout specs available")
   used_ids = used_ids or set()
   available = [l for l in layouts if l.id not in used_ids]
   if not available:
       available = layouts
   return rng.choice(available)




