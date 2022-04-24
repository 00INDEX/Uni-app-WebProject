function Show-Menu
{
    param (
        [string]$Title = '选择要进行的操作'
    )
    Clear-Host
    Write-Host "================ $Title ================"
    
    Write-Host "1: 安装NPM依赖"
    Write-Host "2: 运行H5端页面"
    Write-Host "Q: 退出"
}
Show-Menu
do
 {
     Show-Menu
     $selection = Read-Host "输入选项"
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