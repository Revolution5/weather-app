(()=>{"use strict";(async function(t){try{const t=await fetch("http://api.openweathermap.org/geo/1.0/direct?q=fountain valley&appid=0a797fb7828e6df998b5f208074b34be",{mode:"cors"}),e=await t.json();let a=e[0].lat,n=e[0].lon;const o=await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+a+"&lon="+n+"&appid=0a797fb7828e6df998b5f208074b34be&units=imperial",{mode:"cors"});return await o.json()}catch(t){console.log(t)}})().then((t=>{let e=function(t){let e={cityName:"",countryName:"",currentTemp:0,humidity:0};return e.cityName=t.name,e.countryName=t.sys.country,e.currentTemp=t.main.temp,e.humidity=t.main.humidity,e}(t);console.log(e)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoib0JBRU9BLGVBQThCQyxHQUNqQyxJQUVJLE1BQU1DLFFBQXVCQyxNQUFNLHdHQUNuQyxDQUFDQyxLQUFNLFNBQ0RDLFFBQW1CSCxFQUFlSSxPQUN4QyxJQUFJQyxFQUFNRixFQUFXLEdBQUdFLElBQ3BCQyxFQUFNSCxFQUFXLEdBQUdHLElBR3hCLE1BQU1DLFFBQWlCTixNQUFNLHVEQUF5REksRUFBTSxRQUFVQyxFQUFNLHlEQUM1RyxDQUFDSixLQUFNLFNBR1AsYUFGMEJLLEVBQVNILE9BSXZDLE1BQU1JLEdBQ0ZDLFFBQVFDLElBQUlGLEtDaEJoQkcsR0FDQ0MsTUFBTUMsSUFDSCxJQUFJQyxFRGtCTCxTQUE0QkMsR0FDL0IsSUFBSUMsRUFBZSxDQUNmQyxTQUFVLEdBQ1ZDLFlBQWEsR0FDYkMsWUFBYSxFQUNiQyxTQUFVLEdBUWQsT0FMQUosRUFBYUMsU0FBV0YsRUFBWU0sS0FDcENMLEVBQWFFLFlBQWNILEVBQVlPLElBQUlDLFFBQzNDUCxFQUFhRyxZQUFjSixFQUFZUyxLQUFLQyxLQUM1Q1QsRUFBYUksU0FBV0wsRUFBWVMsS0FBS0osU0FFbENKLEVDL0JTVSxDQUFtQmIsR0FDL0JKLFFBQVFDLElBQUlJLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vQVBJIGtleSBpcyBhIGZyZWUgcHVibGljIGtleSwgdGhlcmVmb3JlIHNob3dpbmcgaXQgaGVyZSBkb2VzIG5vdCBtYXR0ZXJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgICAvL2NvbnZlcnQgY2l0eSBuYW1lIHRvIGNvb3JkaW5hdGVzXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQ29vcmRzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPVwiICsgY2l0eSArIFwiJmFwcGlkPTBhNzk3ZmI3ODI4ZTZkZjk5OGI1ZjIwODA3NGIzNGJlXCIsIFxuICAgICAgICB7bW9kZTogXCJjb3JzXCJ9KTtcbiAgICAgICAgY29uc3QgY2l0eUNvb3JkcyA9IGF3YWl0IHJlc3BvbnNlQ29vcmRzLmpzb24oKTtcbiAgICAgICAgbGV0IGxhdCA9IGNpdHlDb29yZHNbMF0ubGF0O1xuICAgICAgICBsZXQgbG9uID0gY2l0eUNvb3Jkc1swXS5sb247XG5cbiAgICAgICAgLy91c2UgY29vcmRpbmF0ZXMgdG8gZ2V0IHdlYXRoZXIgZGF0YVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PVwiICsgbGF0ICsgXCImbG9uPVwiICsgbG9uICsgXCImYXBwaWQ9MGE3OTdmYjc4MjhlNmRmOTk4YjVmMjA4MDc0YjM0YmUmdW5pdHM9aW1wZXJpYWxcIixcbiAgICAgICAge21vZGU6IFwiY29yc1wifSk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTsgXG4gICAgfVxuICAgIGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSkge1xuICAgIGxldCB3ZWF0aGVyU3RhdHMgPSB7XG4gICAgICAgIGNpdHlOYW1lOiBcIlwiLFxuICAgICAgICBjb3VudHJ5TmFtZTogXCJcIixcbiAgICAgICAgY3VycmVudFRlbXA6IDAsXG4gICAgICAgIGh1bWlkaXR5OiAwXG4gICAgfTtcbiAgICBcbiAgICB3ZWF0aGVyU3RhdHMuY2l0eU5hbWUgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgIHdlYXRoZXJTdGF0cy5jb3VudHJ5TmFtZSA9IHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5O1xuICAgIHdlYXRoZXJTdGF0cy5jdXJyZW50VGVtcCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcDtcbiAgICB3ZWF0aGVyU3RhdHMuaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuXG4gICAgcmV0dXJuIHdlYXRoZXJTdGF0cztcbn1cbiIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhLCBwcm9jZXNzV2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlU3RhdHMoKSB7XG4gICAgZ2V0V2VhdGhlckRhdGEoXCJmb3VudGFpbiB2YWxsZXlcIilcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgc3RhdHMgPSBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRzKTtcbiAgICB9KSBcbn1cbiJdLCJuYW1lcyI6WyJhc3luYyIsImNpdHkiLCJyZXNwb25zZUNvb3JkcyIsImZldGNoIiwibW9kZSIsImNpdHlDb29yZHMiLCJqc29uIiwibGF0IiwibG9uIiwicmVzcG9uc2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2VhdGhlckRhdGEiLCJ0aGVuIiwiZGF0YSIsInN0YXRzIiwid2VhdGhlckRhdGEiLCJ3ZWF0aGVyU3RhdHMiLCJjaXR5TmFtZSIsImNvdW50cnlOYW1lIiwiY3VycmVudFRlbXAiLCJodW1pZGl0eSIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5IiwibWFpbiIsInRlbXAiLCJwcm9jZXNzV2VhdGhlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9