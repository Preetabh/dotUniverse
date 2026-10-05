$sourceDir = "c:\Users\Administrator\Desktop\dotUniverse"
$zipPath = "c:\Users\Administrator\Desktop\dotUniverse\dotUniverse.zip"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

$files = Get-ChildItem -Path $sourceDir -Recurse -File | Where-Object {
    $_.FullName -notmatch '\\node_modules(\\|$)' -and
    $_.FullName -notmatch '\\\.git(\\|$)' -and
    $_.FullName -notmatch '\\dist(\\|$)' -and
    $_.FullName -notmatch '\\\.next(\\|$)' -and
    $_.FullName -ne $zipPath -and
    $_.Extension -ne '.zip'
}

$count = 0
foreach ($file in $files) {
    $rel = $file.FullName.Substring($sourceDir.Length + 1).Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
        $zip,
        $file.FullName,
        $rel,
        [System.IO.Compression.CompressionLevel]::Optimal
    ) | Out-Null
    $count++
}

$zip.Dispose()

$zipItem = Get-Item $zipPath
$sizeMB = [math]::Round($zipItem.Length / 1MB, 2)
Write-Output "SUCCESS: Created $zipPath ($sizeMB MB, $count files)"
