const ipnElementa     = document.querySelector('.yearcontrol')
const btnElement     = document.querySelector('button')
const resultElement1 = document.querySelector('#result1')
const resultElement2 = document.querySelector('#result2')
const danh_sach_can = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ']
const danh_sach_chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tí', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi']

function convertYear(solarYear) {
  if (solarYear < 0) return 'Năm Dương Lịch phải lớn hơn 0'
  if (Number.isNaN(solarYear)) return 'Năm Dương Lịch không đúng định dạng, vui lòng nhập lại'

  let can = 'Không'
  if ((solarYear % 10) >= 0 && (solarYear % 10) <= 9) {
    can = danh_sach_can[solarYear % 10]
  }

  let chi = 'Biết'
  if ((solarYear % 12) >= 0 && (solarYear % 12) <= 11) {
    chi = danh_sach_chi[solarYear % 12]
  }
  return `${can} ${chi}`
}

btnElement.addEventListener('click', function() {
  resultElement1.innerHTML = `Năm dương lịch: <b>${ipnElementa.value}</b>`
  resultElement2.innerHTML = `Năm âm lịch: <b>${convertYear(Number(ipnElementa.value))}</b>`
})