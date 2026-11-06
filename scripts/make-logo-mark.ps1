Add-Type -AssemblyName System.Drawing
$source = [System.Drawing.Bitmap]::new((Join-Path $PSScriptRoot '..\src\assets\logo\logo.png'))
$mark = [System.Drawing.Bitmap]::new(430, 410, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
try {
  for ($y = 0; $y -lt $mark.Height; $y++) {
    for ($x = 0; $x -lt $mark.Width; $x++) {
      $pixel = $source.GetPixel($x + 20, $y + 80)
      # Remove the vertical separator beside the emblem, not its lower flourish.
      if (($x -ge 410 -and $y -lt 285) -or
          ($pixel.R -ge 242 -and $pixel.G -ge 242 -and $pixel.B -ge 242)) {
        $mark.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
      } else {
        $mark.SetPixel($x, $y, $pixel)
      }
    }
  }
  $mark.Save((Join-Path $PSScriptRoot '..\src\assets\logo\logo-mark.png'), [System.Drawing.Imaging.ImageFormat]::Png)
} finally {
  $mark.Dispose()
  $source.Dispose()
}
