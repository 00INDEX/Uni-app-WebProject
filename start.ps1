function Show-Menu
{
    param (
        [string]$Title = 'ѡ��Ҫ���еĲ���'
    )
    Clear-Host
    Write-Host "================ $Title ================"
    
    Write-Host "1: ��װNPM����"
    Write-Host "2: ����H5��ҳ��"
    Write-Host "Q: �˳�"
}
Show-Menu
do
 {
     Show-Menu
     $selection = Read-Host "����ѡ��"
     switch ($selection)
     {
         '1' {
             npm i
         } '2' {
             npm run dev:h5
         }
     }
     pause
 }
 until ($selection -eq 'q')